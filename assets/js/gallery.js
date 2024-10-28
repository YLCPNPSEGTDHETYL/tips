import { initCodeCopy } from './code.js';
import { csData } from './csdata.js';
import { isSmallTouchDevice,isTouchDevice,convertLatexBlocksToHTML,markdownImageSize } from './main.js'


// *FUNC DEF* loader
function showGridAfterDelay(delay) {
  setTimeout(function () {
    document.querySelector('.grid').classList.add('visible');
    document.querySelector('.loader').classList.add('hidden');
    console.log('Grid is now visible, loader is hidden.');
  }, delay);
}

let scrollbarWidth;

function getScrollbarWidth() {
  scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
}
function adjustBodyPadding() {
  document.body.style.paddingRight = `${scrollbarWidth}px`;
}
function resetBodyPadding() {
  document.body.style.paddingRight = '';
}

window.addEventListener('load', getScrollbarWidth);
window.addEventListener('resize', getScrollbarWidth);


// *FUNC DEF* Load html into modals
async function loadModalContent() {
  const modalContents = document.querySelectorAll('.modal-content');
  const md = window.markdownit({
    html: true,
    linkify: true,
    typographer: true,
    breaks: true,
  }).use(markdownImageSize);

  // Create an array of promises for fetching and processing content
  const fetchPromises = Array.from(modalContents).map(async (modalContent) => {
    modalContents.scrollTop = 0;
    const modalId = modalContent.id; // e.g.) modal-1
    const index = modalId.split('-')[1]; // e.g.) "1"
    const itemLink = document.querySelector(`#modal-${index}`).dataset.link; // e.g.) hogehoge.html or hogehoge.md

    console.log(`Loading content for modal "${modalId}" from "${itemLink}".`);

    if (itemLink) {
      try {
        const response = await fetch(itemLink);
        if (!response.ok) {
          throw new Error('サーバーエラー');
        }
        const content = await response.text();

        if (itemLink.endsWith('.md')) {
          const preConvertedContent = convertLatexBlocksToHTML(content.trim());
          // console.log("Pre-converted content:", preConvertedContent);
          const htmlContent = md.render(preConvertedContent);
          // console.log("HTML content:", htmlContent);

          modalContent.innerHTML = htmlContent; // Convert Markdown to HTML

          // Replace markers with modal links
          replaceMarkersWithLinks(modalContent);
        } else {
          modalContent.innerHTML = content.trim(); // Load HTML directly
        }

        // KaTeX rendering
        renderMathInElement(modalContent, {
          delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false },
          ]
        });
        Prism.highlightAllUnder(modalContent);

        console.log(`Content loaded into "${modalId}".`);
      } catch (error) {
        console.error('Failed to load modal content:', error);
        modalContent.innerHTML = "エラー：コンテンツがロードできません。";
      }
    } else {
      modalContent.innerHTML = "工事中";
      console.log(`No content link provided for modal "${modalId}", showing "工事中".`);
    }
  });

  // Wait for all fetch operations to complete
  await Promise.all(fetchPromises);
}

// *FUNC DEF* Replace Markdown markers with modal links
function replaceMarkersWithLinks(modalContent) {
  const htmlContent = modalContent.innerHTML;

  // Replace markers like [modal-1] with corresponding HTML
  const updatedContent = htmlContent.replace(/(?:\{(.*?)\})?\[(modal-(\d+))\]/g, (match, prefixText, _, modalId) => {
    // Find the item in the data
    const item = csData.find(entry => entry.id === modalId);

    if (item) {
      return `
         <span class="related-link-caption">${prefixText || ''}</span>
        <span  class="related-link-id" data-target-modal="modal-${modalId}">
          <span data-link="${item.link}" class="related-link">
            <img class="ic ic-external-link" src="/tips/assets/icon/external-link.svg" alt="external-link" />
            <span>${item.title}</span>
          </span>
        </span>
      `;
    } else {
      // Fallback if item not found
      return `${prefixText || ''}<span>エラー：リンク先が見つかりません。</span>`;
    }
  });

  modalContent.innerHTML = updatedContent;
}


let modalHistory = [];
let isModalLinkClicked = false;

function resetScrollPosition(modal) {
  console.log('Resetting scroll position for modal:', modal.id);
  const modalContent = modal.querySelector('.modal-container');
  if (modalContent) {
    console.log('Current scrollTop before reset:', modalContent.scrollTop); // スクロール位置を表示
    modalContent.scrollTop = 0; // スクロール位置をトップにリセット
    console.log('Scroll position reset to top.');
    console.log('Current scrollTop after reset:', modalContent.scrollTop); // スクロール位置を再表示
  } else {
    console.log('No .modal-content found inside modal:', modal.id);
  }
}

// *FUNC DEF* Initialize MicroModal
function initializeMicroModal() {
  MicroModal.init({
    disableScroll: true,
    disableFocus: true,
    awaitCloseAnimation: true,
    awaitOpenAnimation: true,

    onShow: function (modal) {
      if (modal.id !== 'popover-modal') {
        console.log('Modal opened, initializing ScrollHint');
        adjustBodyPadding();
        initializeScrollHint();
        updateHistoryOnOpen(modal.id); // モーダルが開いたときに履歴を更新
        resetScrollPosition(modal); // スクロール位置をリセット
        addCloseButtonListener(modal.id);
      }
    },
    onClose: function (modal) {
      if (modal.id !== 'popover-modal') {
        console.log('Modal closed, resetting ScrollHint');

        console.log('isModalLinkClicked reset to', isModalLinkClicked);
        console.log('Modal about to be closed:', modal.id);

        clearModalHistory();
        resetBodyPadding();
      }
    }
  });

  console.log('MicroModal initialized.');


  window.addEventListener('popstate', handleHistoryPopState);
}

function addCloseButtonListener(modalId) {
  const closeButtons = document.querySelectorAll(`#${modalId} .modal-btn`);
  closeButtons.forEach(closeButton => {
    closeButton.addEventListener('click', (event) => {
      event.preventDefault();
      MicroModal.close(modalId);
    });
  });
}


// ポップオーバー表示を切り替える関数
function togglePopover() {
  MicroModal.show('popover-modal', {
    disableScroll: true,
    disableFocus: true,
    awaitCloseAnimation: true,
    awaitOpenAnimation: true,
  });
}


// 設定ボタンにクリックイベントリスナーを追加する関数
function setupSettingsButton() {
  if (isSmallTouchDevice()) {
    console.log('Device is a small touch device');
    const settingsBtn = document.querySelector('.settings-btn');

    if (settingsBtn) {
      settingsBtn.addEventListener('click', function () {
        console.log('Settings button clicked');
        togglePopover();
      });
    } else {
      console.error('Settings button not found');
    }
  } else {
    console.log('Device is not a small touch device');
  }
}


function updateHistoryOnOpen(modalId) {
  // 履歴にIDを追加する前に、現在のURLのハッシュを更新
  history.pushState({ modalId: modalId }, '', `#${modalId}`);
  console.log('Updated URL hash to:', `#${modalId}`);

  if (modalHistory.length === 0 || modalHistory[modalHistory.length - 1] !== modalId) {
    modalHistory.push(modalId);
    console.log('Modal history updated:', modalHistory);
  }
}

// モーダルがすべて閉じたときに履歴を消去する関数
function clearModalHistory() {
  setTimeout(() => {
    const openModalsCount = document.querySelectorAll('.is-open').length;
    console.log(`Number of open modals: ${openModalsCount}`);

    if (openModalsCount === 0) {
      const modalHistoryLength = modalHistory.length;
      console.log(`Modal history length: ${modalHistoryLength}`);
      modalHistory = [];
      history.replaceState(null, '', ' '); // URLのハッシュをクリア

      if (modalHistoryLength > 0) {
        window.history.go(-modalHistoryLength); // 全履歴を戻す
      }
      console.log('All modals closed, history cleared.');
    }
  }, 500);
}

function handleHistoryPopState(event) {
  console.log('Popstate event triggered');
  console.log('Event state:', event.state);
  if (event.state && event.state.modalId) {
    console.log('Current modal history length:', modalHistory.length);
    if (modalHistory.length > 1) {
      const previousModalId = modalHistory[modalHistory.length - 2];
      const currentModalId = modalHistory[modalHistory.length - 1];
      modalHistory.pop(); // 最後のIDを削除

      if (currentModalId) {
        MicroModal.close(currentModalId, {
          disableScroll: true,
          disableFocus: true,
          awaitCloseAnimation: true,
          awaitOpenAnimation: true,
        });
        resetBodyPadding();
      }
      if (previousModalId) {
        setTimeout(() => {
          adjustBodyPadding();
          MicroModal.show(previousModalId, {
            disableScroll: true,
            disableFocus: true,
            awaitCloseAnimation: true,
            awaitOpenAnimation: true,
          });
        }, 200);
      }
      console.log('Modal history after back:', modalHistory);
    } else {
      clearModalHistory();
    }
  } else if (modalHistory.length === 1) {
    const currentModalId = modalHistory[0];
    console.log('Handling case with a single modal in history:', currentModalId);
    modalHistory = [];

    if (currentModalId) {
      console.log('Closing last modal:', currentModalId);
      MicroModal.close(currentModalId, {
        disableScroll: true,
        disableFocus: true,
        awaitCloseAnimation: true,
        awaitOpenAnimation: true,
      });
      resetBodyPadding();

      // モーダルが閉じた後に履歴をクリア
      MicroModal.onClose = function (modal) {
        console.log('Modal onClose event triggered for:', modal.id);
        if (modal.id === currentModalId) {
          clearModalHistory();
        }
      };
    }
  }
}

// Function to set up event listeners for back modal buttons
function setupBackButtonListeners() {
  const backButtons = document.querySelectorAll('.modal-back');
  console.log('Back buttons found:', backButtons); // ボタンが見つかったか確認

  backButtons.forEach((backButton) => {
    backButton.addEventListener('click', function () {
      console.log('Back button clicked'); // クリックイベントが発火しているか確認
      window.history.back(); // Go back in history
    });
  });
}

// *FUNC DEF*  Set up event listeners for modal links
function setupModalLinkListeners() {
  document.querySelectorAll('.modal-content span[data-target-modal]').forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      isModalLinkClicked = true;
      console.log("isModalLinkClicked", isModalLinkClicked);
      const targetModalId = event.currentTarget.dataset.targetModal;
      if (targetModalId) {
        const currentModal = document.querySelector('.is-open');
        if (currentModal) {
          // Close the currently open modal
          console.log("Closing current modal:", currentModal.id);
          isModalLinkClicked = false;

          MicroModal.close(currentModal.id,
            {
              disableScroll: true,
              disableFocus: true,
              awaitCloseAnimation: true,
              awaitOpenAnimation: true,
            });

        }
        // Open the target modal
        setTimeout(() => {
          adjustBodyPadding();
          MicroModal.show(targetModalId,
            {
              disableScroll: true,
              disableFocus: true,
              awaitCloseAnimation: true,
              awaitOpenAnimation: true,

              onShow: function (modal) {
                adjustBodyPadding();
                console.log('Modal opened, initializing ScrollHint');
                initializeScrollHint();
                updateHistoryOnOpen(modal.id); // モーダルが開いたときに履歴を更新
                resetScrollPosition(modal);
                addCloseButtonListener(modal.id);
              },
              onClose: function (modal) {
                console.log('Modal closed, resetting ScrollHint');

                console.log('isModalLinkClicked reset to', isModalLinkClicked);
                console.log('Modal about to be closed:', modal.id);

                clearModalHistory();
                resetBodyPadding();
              }
            });

          document.dispatchEvent(new CustomEvent('modal:open', { detail: { modalId: targetModalId } }));
        }, 200);
      }
    });
  });
}

function wrapTablesInModalContent() {
  document.querySelectorAll('.modal-content').forEach(function (modalContent) {
    modalContent.querySelectorAll('table').forEach(function (table) {
      var wrapper = document.createElement('div');
      wrapper.classList.add('table-content');
      table.parentNode.insertBefore(wrapper, table);
      wrapper.appendChild(table);
    });
  });
}

// *FUNC DEF* Initialize Kuromoji tokenizer
function initializeTokenizer(callback) {
  kuromoji.builder({ dicPath: '/tips/assets/js/lib/dict' }).build((err, tokenizer) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Kuromoji tokenizer initialized.');
    callback(tokenizer);
  });
}

// *FUNC DEF*  title -> romaji & Set data-title
function romanizeTheTitle(tokenizer) {
  const items = document.querySelectorAll('.item');

  items.forEach(item => {
    const titleElement = item.querySelector('#title-input');
    if (titleElement) {
      const text = titleElement.textContent.trim();
      const tokens = tokenizer.tokenize(text);
      const readings = tokens.map(token => token.reading || token.surface_form);
      const fullReading = readings.join(''); // Join words
      const romaji = wanakana.toRomaji(fullReading).toLowerCase(); // "Roma"nize
      item.setAttribute('data-title', romaji);
      console.log(`Set data-title for item with text "${text}" to "${romaji}".`);
    }
  });
}


// *FUNC DEF* Set up drag event handlers for the grid
function setUpDragEventHandlers(grid) {
  let hasMouseMoved = false;

  // *FUNC DEF* Reset pointer-events
  function resetPointerEvents() {
    document.querySelectorAll('.item').forEach(item => {
      item.style.pointerEvents = '';
    });
    document.querySelector('.grid-container').style.cursor = '';
  }

  // *FUNC DEF* Handle mouse movement
  function mouseMoveListener() {
    if (!hasMouseMoved) {
      document.querySelectorAll('.item').forEach(item => {
        item.style.pointerEvents = 'none';
      });
      document.querySelector('.grid-container').style.cursor = 'move';
      hasMouseMoved = true;
    }
  }

  // *FUNC DEF* Handle mouse up event
  function mouseUpListener() {
    resetPointerEvents();
    document.removeEventListener('mousemove', mouseMoveListener);
    document.removeEventListener('mouseup', mouseUpListener);
  }

  grid.on('dragStart', function () {
    resetPointerEvents();
    hasMouseMoved = false;
    document.addEventListener('mousemove', mouseMoveListener);
    document.addEventListener('mouseup', mouseUpListener);
  });

  grid.on('dragEnd', function () {
    resetPointerEvents();
  });
}


let initialOrder = [];

// *FUNC DEF* Initialize Muuri grid
function initializeMuuriGrid() {
  const grid = new Muuri('.grid', {
    dragEnabled: !isTouchDevice(),
    layout: {
      fillGaps: false,
      rounding: false,
    },
    layoutOnResize: 200,
  });

  if (isTouchDevice()) {
    initialOrder = grid.getItems(); 
    console.log('Initial order on touch device:', initialOrder);
  }

  return grid;
}


let cachedSearchTextFormats = null;

// *FUNC DEF*  Search, Filter, and Sort
function setUpSearchFilterSort(grid, tokenizer) {
  const isSP = isSmallTouchDevice();
  const wrapper = document.querySelector(`.Allfilter-controls${isSP ? '.SP-only' : '.PC-only'}`);
  const searchField = wrapper.querySelector('.search-field');
  const filterField = wrapper.querySelector('.filter-field');
  const sortField = wrapper.querySelector('.sort-field');

  // Filtering function
  let filterCheckBoxes = wrapper.querySelectorAll('[name="filter"]');


  filterCheckBoxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', handleFilterChange);
  });
  updateCheckedList();


  searchField.addEventListener('keyup', function (event) {
    handleSearchFieldChange(tokenizer);
  });
  filterField.addEventListener('change', handleFilterChange);

  if (isSP) {
    const sortRadios = wrapper.querySelectorAll('.sort-radio');
    sortRadios.forEach(function (radio) {
      radio.addEventListener('change', function (event) {
        handleSortRadioChange(event);
      });
    });
  } else {
    sortField.addEventListener('change', function () {
      handleSortFieldChange();
    });
  }
}


let previousSortOrder = [];

// Function to sort items based on current sort criteria
function sort() {
  const isSP = isSmallTouchDevice();
  const wrapper = document.querySelector(`.Allfilter-controls${isSP ? '.SP-only' : '.PC-only'}`);
  const sortField = wrapper.querySelector('.sort-field');
  const currentSort = sortField.value;

  console.log('Current sort value:', currentSort);

  if (currentSort === 'order') {
    if (isSP) {
      grid.sort(initialOrder, { layout: 'instant' });
      console.log('SP: Sorted by previous order');
    } else {
      grid.sort(previousSortOrder, { layout: 'instant' });
      console.log('PC: Sorted by previous order');
    }
  } else if (currentSort === 'title') {
    previousSortOrder = grid.getItems(); 
    grid.sort(CompareHiraganizedTitle);
    console.log(isSP ? 'SP: Sorted by title' : 'PC: Sorted by title');
  }
}

// Function to compare hiraganized titles
function CompareHiraganizedTitle(a, b) {
  let aVal = a.getElement().getAttribute('data-title') || '';
  let bVal = b.getElement().getAttribute('data-title') || '';

  // Run hiraganize
  let aHiragana = HiraganizeTheTitle(aVal);
  let bHiragana = HiraganizeTheTitle(bVal);

  // Compare hiragana strings
  const comparison = aHiragana.localeCompare(bHiragana, 'ja-JP', { sensitivity: 'base' });
  console.log(`Compared "${aHiragana}" with "${bHiragana}": ${comparison}`);
  return comparison;
}

// Function to convert romaji to hiragana
function HiraganizeTheTitle(romaji) {
  const hiragana = wanakana.toHiragana(romaji);
  console.log(`Hiraganized "${romaji}" to "${hiragana}".`);
  return hiragana;
}

const checkboxMapping = {
  'SP-checkbox-1': { tag: 'MustKnow', text: '基本' },
  'SP-checkbox-2': { tag: 'Eq', text: '数式' },
  'SP-checkbox-3': { tag: 'EqSymbl', text: '数式記号' },
  'SP-checkbox-4': { tag: 'FigTabItm', text: '図表／箇条書き' },
  'SP-checkbox-5': { tag: 'Layout', text: 'レイアウト' },
  'SP-checkbox-6': { tag: 'StyDocStr', text: '体裁／文書構造' },
  'SP-checkbox-7': { tag: 'HighLevel', text: '高度' },
  'SP-checkbox-8': { tag: 'Macro', text: 'マクロ' },
  'SP-checkbox-9': { tag: 'Package', text: 'Package' }
};


function updateCheckedList() {
  const checkedList = document.querySelector('.SP-only.checked-list');

  const existingSpans = checkedList.querySelectorAll('span');
  existingSpans.forEach(span => span.remove());

  const checkedSpans = [];
  Object.keys(checkboxMapping).forEach(id => {
    const checkbox = document.getElementById(id);
    if (checkbox.checked) {
      const { tag, text } = checkboxMapping[id];
      const span = document.createElement('span');
      span.className = tag;

      span.textContent = text;
      checkedSpans.push(span);
    }
  });
  checkedSpans.forEach((span, index) => {
    if (index < checkedSpans.length - 1) {
      span.textContent = `${span.textContent}`;
    }
    checkedList.appendChild(span);
  });
}


function filter(searchTextFormats = cachedSearchTextFormats) {
  const isSP = isSmallTouchDevice();
  const wrapper = document.querySelector(`.Allfilter-controls${isSP ? '.SP-only' : '.PC-only'}`);
  const filterField = wrapper.querySelector('.filter-field');
  const searchAttr = 'data-title'; // Attribute to search by
  const filterAttr = 'data-category'; // Attribute to filter by


  console.log(`Wrapper for filter checkboxes: ${wrapper.className}`);
  let filterValues = Array.from(wrapper.querySelectorAll('[name="filter"]'))
    .filter(checkbox => checkbox.checked && checkbox.value !== '')
    .map(checkbox => checkbox.value);

  console.log('Filter values:', filterValues);

  console.log('Filtering with:', { searchTextFormats: cachedSearchTextFormats, filterValues });

  grid.filter(function (item) {
    const element = item.getElement();
    const itemTitle = element.getAttribute(searchAttr) || '';
    const itemTitleFormats = convertTextFormats(itemTitle);
    const itemCategories = (element.getAttribute(filterAttr) || '').split(' ');

    // console.log('Item title formats:', itemTitleFormats);
    // console.log('Item categories:', itemCategories);

    // Check if the item matches the search word (Kana-Roma System)
    const isSearchMatch = !cachedSearchTextFormats ? true : // EmptyInput
      itemTitleFormats.romaji.indexOf(cachedSearchTextFormats.romaji) > -1 ||
      itemTitleFormats.hiragana.indexOf(cachedSearchTextFormats.hiragana) > -1 ||
      itemTitleFormats.katakana.indexOf(cachedSearchTextFormats.katakana) > -1;

    console.log('Search match:', isSearchMatch);

    // Check for matches to both filter and search criteria
    const isFilterMatch = filterValues.length === 0 || filterValues.some(value => itemCategories.includes(value));

    console.log('Filter match:', isFilterMatch);

    // Return items that match both search and filter criteria
    return isSearchMatch && isFilterMatch;
  });
  updateCheckedList();
}


function handleFilterChange(event) {

  const isSP = isSmallTouchDevice();
  const wrapper = document.querySelector(`.Allfilter-controls${isSP ? '.SP-only' : '.PC-only'}`);

  let filterCheckBoxes = wrapper.querySelectorAll('[name="filter"]');
  const currentCheckbox = event.target;

  let checkboxPrefix = isSP ? '#SP-' : '#PC-';
  let allCheckbox = wrapper.querySelector(checkboxPrefix + 'checkbox-all');

  let checkedBoxes = Array.from(filterCheckBoxes).filter(cb => cb.checked && cb.value !== '');


  if (currentCheckbox.value !== '' && currentCheckbox.checked) {
    allCheckbox.checked = false;
  }

  if (currentCheckbox === allCheckbox && currentCheckbox.checked) {
    filterCheckBoxes.forEach(function (checkbox) {
      if (checkbox !== allCheckbox) {
        checkbox.checked = false;
      }
    });
  }

  if (checkedBoxes.length === 0 || checkedBoxes.length === filterCheckBoxes.length - 1) {
    allCheckbox.checked = true;
    filterCheckBoxes.forEach(function (checkbox) {
      if (checkbox !== allCheckbox) {
        checkbox.checked = false;
      }
    });
  }

  console.log('Filter changed, applying filter.');
  filter();
}

// Return romanized, Hiraganized, & Katakanized objects
function convertTextFormats(text) {
  return {
    romaji: wanakana.toRomaji(text).toLowerCase(),
    hiragana: wanakana.toHiragana(text).toLowerCase(),
    katakana: wanakana.toKatakana(text).toLowerCase()
  };
}

// Function to convert search input
function convertSearchInput(tokenizer, inputText, callback) {
  const tokens = tokenizer.tokenize(inputText);
  const readings = tokens.map(token => token.reading || token.surface_form);
  const fullReading = readings.join('');
  const formats = convertTextFormats(fullReading);
  console.log(`Search input "${inputText}" converted to:`, formats);
  callback(formats);
}

let searchTimeout;

function handleSearchFieldChange(tokenizer) {
  const isSP = isSmallTouchDevice();
  const wrapper = document.querySelector(`.Allfilter-controls${isSP ? '.SP-only' : '.PC-only'}`);
  const searchField = wrapper.querySelector('.search-field');
  let searchFieldValue = searchField.value.toLowerCase();
  const newSearch = searchField.value.trim();
  console.log('Search field updated:', newSearch);

  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    if (cachedSearchTextFormats !== newSearch) {
      searchFieldValue = newSearch;
      convertSearchInput(tokenizer, searchFieldValue, (searchTextFormats) => {
        cachedSearchTextFormats = searchTextFormats;
        filter(cachedSearchTextFormats);
      });
    }
  }, 50);
}


function handleSortFieldChange() {
  const isSP = isSmallTouchDevice();
  const wrapper = document.querySelector(`.Allfilter-controls${isSP ? '.SP-only' : '.PC-only'}`);
  const sortField = wrapper.querySelector('.sort-field');
  console.log('Sort field changed:', sortField.value);
  sort();
}

function handleSortRadioChange(event) {
  const isSP = isSmallTouchDevice();
  const wrapper = document.querySelector(`.Allfilter-controls${isSP ? '.SP-only' : '.PC-only'}`);
  const sortField = wrapper.querySelector('.sort-field');
  const sortValue = event.target.getAttribute('data-sort');
  console.log('SP sort radio selected:', sortValue);

  sortField.value = sortValue;
  console.log('sortField.value:', sortField.value);
  sort(); 
}


let previousWidth = window.innerWidth;

function handleResize() {
  const currentWidth = window.innerWidth;

  if (isTouchDevice()) {
    if ((previousWidth <= 640 && currentWidth > 640) || (previousWidth > 640 && currentWidth <= 640)) {
      console.log('Width has crossed 640px threshold. Reloading...');
      location.reload();
    }
  }

  previousWidth = currentWidth;
}

window.addEventListener('resize', handleResize);

handleResize();



let grid;
let initialtokenizer;


document.addEventListener('DOMContentLoaded', function () {
  showGridAfterDelay(2000);
  setupSettingsButton();
  initializeTokenizer(function (tokenizer) {
    initialtokenizer = tokenizer;
    romanizeTheTitle(tokenizer);

    grid = initializeMuuriGrid();
    if (!isTouchDevice()) {
      setUpDragEventHandlers(grid);
    }

    setUpSearchFilterSort(grid, tokenizer);
  });

  initializeMicroModal();
  setTimeout(async function () {
    await loadModalContent();
    wrapTablesInModalContent();
    setupModalLinkListeners();
    initCodeCopy();
    setupBackButtonListeners();
  }, 5000);
});


