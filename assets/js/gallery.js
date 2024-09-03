import { initCodeCopy } from './code.js';
import { csData } from './csdata.js';
import { initializeScrollHint } from './main.js';
import { resetScrollHint } from './main.js';


// *FUNC DEF* loader
function showGridAfterDelay(delay) {
  setTimeout(function () {
    document.querySelector('.grid').classList.add('visible');
    document.querySelector('.loader').classList.add('hidden');
    console.log('Grid is now visible, loader is hidden.');
  }, delay);
}

// *FUNC DEF* Initialize MicroModal
function initializeMicroModal() {
  MicroModal.init({
    disableScroll: true,
    disableFocus: true,
    awaitCloseAnimation: true,
    awaitOpenAnimation: true
  });

  document.addEventListener('modal:open', function (event) {
    const modalContent = document.querySelector(`#${event.detail.modalId} .modal-content`);
    if (modalContent) {
      applyPrismToModal(modalContent);
    }
  });

  console.log('MicroModal initialized.');
}

// *FUNC DEF* Convert Markdown LaTeX blocks to HTML with class
function convertLatexBlocksToHTML(content) {
  let updatedContent = content.replace(/```latex/g, '<pre class="line-numbers language-latex"><code class="language-latex">');

  updatedContent = updatedContent.replace(/```/g, '</code></pre>');

  return updatedContent;
}


// *FUNC DEF* Load html into modals
async function loadModalContent() {
  const modalContents = document.querySelectorAll('.modal-content');
  const md = window.markdownit({
    html: true,
    linkify: true,
    typographer: true,
    breaks: true,
  });

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

        // Set up event listeners for modal links
        setupModalLinkListeners();

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
          <span data-link="${item.link}" class="related-link">${item.title}</span>
        </span>
      `;
    } else {
      // Fallback if item not found
      return `${prefixText || ''}<span>エラー：リンク先が見つかりません。</span>`;
    }
  });

  modalContent.innerHTML = updatedContent;
}

let isModalLinkClicked = false;

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
          resetScrollHint();
          MicroModal.close(currentModal.id);
        }
        // Open the target modal
        setTimeout(() => {
          MicroModal.show(targetModalId);

          document.dispatchEvent(new CustomEvent('modal:open', { detail: { modalId: targetModalId } }));
        }, 200);
      } else {
        MicroModal.show(targetModalId);
        document.dispatchEvent(new CustomEvent('modal:open', { detail: { modalId: targetModalId } }));
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
  kuromoji.builder({ dicPath: '../assets/js/lib/dict' }).build((err, tokenizer) => {
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

// *FUNC DEF* Initialize Muuri grid
function initializeMuuriGrid() {
  return new Muuri('.grid', {
    dragEnabled: true
  });
}


// To manage Grid, Search, Filter, and Sort
function setUpSearchFilterSort(grid, tokenizer) {
  const wrapper = document.querySelector('.grid-wrapper');
  const searchField = wrapper.querySelector('.search-field');
  const filterField = wrapper.querySelector('.filter-field');
  const sortField = wrapper.querySelector('.sort-field');
  const searchAttr = 'data-title'; // Attribute to search by
  const filterAttr = 'data-category'; // Attribute to filter by
  let searchFieldValue = searchField.value.toLowerCase();
  let filterFieldValue = filterField.value;
  let sortFieldValue = sortField.value;
  let dragOrder = []; // Store items in their drag order

  console.log('Setting up search, filter, and sort functionality.');

  // Return romanized, Hiraganized, & Katakanized objects
  function convertTextFormats(text) {
    return {
      romaji: wanakana.toRomaji(text).toLowerCase(),
      hiragana: wanakana.toHiragana(text).toLowerCase(),
      katakana: wanakana.toKatakana(text).toLowerCase()
    };
  }

  // Function to convert search input
  function convertSearchInput(inputText, callback) {
    const tokens = tokenizer.tokenize(inputText);
    const readings = tokens.map(token => token.reading || token.surface_form);
    const fullReading = readings.join('');
    const formats = convertTextFormats(fullReading);
    console.log(`Search input "${inputText}" converted to:`, formats);
    callback(formats);
  }

  // Filtering function
  let filterCheckBoxes = document.querySelectorAll('[name="filter"]');

  // Initially check "All"
  document.getElementById('checkbox-all').checked = true;
  console.log('Filter checkboxes initialized, "All" checked.');

  // Add event listeners to filter checkboxes
  filterCheckBoxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', handleFilterChange);
  });

  function handleFilterChange() {
    let allCheckbox = document.getElementById('checkbox-all');
    let checkedBoxes = Array.from(filterCheckBoxes).filter(cb => cb.checked && cb.value !== '');

    // Uncheck "All" if other filters are selected
    if (this.value !== '' && this.checked) {
      allCheckbox.checked = false;
    }

    // Uncheck other filters if "All" is selected
    if (this === allCheckbox && this.checked) {
      filterCheckBoxes.forEach(function (checkbox) {
        if (checkbox !== allCheckbox) {
          checkbox.checked = false;
        }
      });
    }

    // Check "All" if no other filters are selected or all are selected
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

  let cachedSearchTextFormats = null; // Global cash of search input

  function filter() {
    filterFieldValue = filterField.value;
    let filterValues = Array.from(document.querySelectorAll('[name="filter"]'))
      .filter(checkbox => checkbox.checked && checkbox.value !== '')
      .map(checkbox => checkbox.value);

    console.log('Filtering with:', { searchTextFormats: cachedSearchTextFormats, filterValues });

    grid.filter(function (item) {
      const element = item.getElement();
      const itemTitle = element.getAttribute(searchAttr) || '';
      const itemTitleFormats = convertTextFormats(itemTitle);
      const itemCategories = (element.getAttribute(filterAttr) || '').split(' ');

      console.log('Item title formats:', itemTitleFormats);
      console.log('Item categories:', itemCategories);

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
  }

  // Function to convert romaji to hiragana
  function HiraganizeTheTitle(romaji) {
    const hiragana = wanakana.toHiragana(romaji);
    console.log(`Hiraganized "${romaji}" to "${hiragana}".`);
    return hiragana;
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

  // Function to sort items based on current sort criteria
  function sort() {
    const currentSort = sortField.value;
    console.log('Current sort value:', currentSort);

    if (sortFieldValue === currentSort) {
      console.log('Sort value unchanged, no sorting needed.');
      return; // No change in sort value
    }

    // Drag order
    if (sortFieldValue === 'order') {
      dragOrder = grid.getItems();
      console.log('Saved drag order.');
    }

    // Sorting rule
    grid.sort(
      currentSort === 'title' ? CompareHiraganizedTitle :
        dragOrder
    );
    console.log('Items sorted based on:', currentSort);

    sortFieldValue = currentSort;
  }

  // Event binding for the search field
  searchField.addEventListener('keyup', function () {
    const newSearch = searchField.value.trim();
    console.log('Search field updated:', newSearch);

    if (searchFieldValue !== newSearch) {
      searchFieldValue = newSearch;
      convertSearchInput(searchFieldValue, (searchTextFormats) => {
        cachedSearchTextFormats = searchTextFormats;
        filter(searchTextFormats);
      });
    }
  });

  // Event binding for the filter field
  filterField.addEventListener('change', function () {
    console.log('Filter field changed:', filterField.value);
    filter();
  });

  // Event binding for the sort field
  sortField.addEventListener('change', function () {
    console.log('Sort field changed:', sortField.value);
    sort();
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


// async function initializeAndListenMicroModal() {
//   // Ensure that replaceMarkersWithLinks is called and completed
//   const modalContent = document.querySelector('#modal-id .modal-content'); // Specify the modal ID or class as needed
//   if (modalContent) {
//     await setupModalLinkListeners();
//   }

//   console.log("isModalLinkClicked", isModalLinkClicked);
//   if (!isModalLinkClicked) {
//     // Initialize MicroModal and set up listeners
//     listenMicroModal();
//   }
//   isModalLinkClicked = false;
//   console.log("isModalLinkClicked", isModalLinkClicked);
// }


function listenMicroModal() {
  MicroModal.init({
      disableScroll: true,
      disableFocus: true,
      awaitCloseAnimation: true,
      awaitOpenAnimation: true,

    onShow: function (modal) {
      console.log('Modal opened, initializing ScrollHint');
      initializeScrollHint();
    },
    onClose: function (modal) {
      if (!isModalLinkClicked) {
        console.log('Modal closed, resetting ScrollHint');
        resetScrollHint();
      } else {
        console.log('Modal closed via link, skipping ScrollHint reset');
        isModalLinkClicked = false;
      }
    }
  });
}

// Function to detect if the device uses touch
function isTouchDevice() {
  return ('ontouchstart' in window || navigator.maxTouchPoints > 0);
}

// Event listener for DOM content loaded
document.addEventListener('DOMContentLoaded', function () {
  showGridAfterDelay(3000);
  initializeTokenizer(function (tokenizer) {
    romanizeTheTitle(tokenizer);

    const grid = initializeMuuriGrid();
    if (!isTouchDevice()) {
      setUpDragEventHandlers(grid);
    }
    setUpSearchFilterSort(grid, tokenizer);
  });
  initializeMicroModal();
  setTimeout(async function () {
    await loadModalContent();
    initCodeCopy();
    wrapTablesInModalContent();
    setupModalLinkListeners();
    listenMicroModal();
  }, 5000);

});

// Add event listeners to dynamically adjust for touch/mouse
window.addEventListener('resize', function () {
  if (!isTouchDevice()) {
    setUpDragEventHandlers(grid);
  } else {
    // Optional: Remove drag event handlers if switching to touch device
  }
});

