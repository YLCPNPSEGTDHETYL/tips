import { initCodeCopy } from './code.js';
import { isSmallTouchDevice, isTouchDevice, convertLatexBlocksToHTML, markdownImageSize } from './main.js'


function addDownloadLinkIcons() {
  const downloadLinks = document.querySelectorAll('.download-link a');

  downloadLinks.forEach(function (link) {
    link.insertAdjacentHTML('beforeend',
      '<img class="ic ic-download" src="/assets/icon/download.svg" alt="download" />'
    );
  });
}

function convertImgTitleToStyle() {
  const images = document.querySelectorAll('.md-content img');

  images.forEach(img => {
    const title = img.getAttribute('title');
    if (title) {
      const maxWidthMatch = title.match(/max-width\s*=\s*(\d+px)/);
      if (maxWidthMatch) {
        img.style.maxWidth = maxWidthMatch[1];
      }
      const newTitle = title.replace(/max-width\s*=\s*\d+px\s*/i, '').trim();
      img.setAttribute('title', newTitle);
    }
  });
}


document.querySelectorAll('pre').forEach(pre => {
  pre.classList.add('line-numbers');
});

// Prism.jsの初期化
Prism.highlightAll();


function removeClassFromInlineCode() {
  const codeBlocks = document.querySelectorAll('code');

  codeBlocks.forEach(codeBlock => {
    if (!codeBlock.closest('pre')) {
      codeBlock.className = '';
    }
  });
}

function wrapTablesInModalContent() {
  document.querySelectorAll('.md-content').forEach(function (modalContent) {
    modalContent.querySelectorAll('table').forEach(function (table) {
      var wrapper = document.createElement('div');
      wrapper.classList.add('table-content');
      table.parentNode.insertBefore(wrapper, table);
      wrapper.appendChild(table);
    });
  });
}

function generateTOC() {
  const mainWrapper = document.querySelector('.main-wrapper.withTOC');
  if (mainWrapper) {
    const mainContent = mainWrapper.querySelector('.main-content');
    const tocDiv = mainWrapper.querySelector('.TOC');

    if (!tocDiv) return;

    const headers = mainContent.querySelectorAll('h1, h2, h3');

    if (headers.length > 0) {
      const tocList = document.createElement('ul');
      let currentLi = null;
      let currentSubUl = null;

      headers.forEach((header, index) => {
        const li = document.createElement('li');
        li.classList.add('toc-item');
        const tocLink = document.createElement('a');
        tocLink.textContent = header.textContent;
        tocLink.href = `#header-${index}`;

        header.id = `header-${index}`;
        li.appendChild(tocLink);

        if (header.tagName.toLowerCase() === 'h1') {
          tocList.appendChild(li);
          currentLi = li;
          currentSubUl = null;
        } else if (header.tagName.toLowerCase() === 'h2') {
          if (!currentSubUl) {
            currentSubUl = document.createElement('ul');
            currentLi.appendChild(currentSubUl);
          }
          currentSubUl.appendChild(li);
          currentLi = li;
        } else if (header.tagName.toLowerCase() === 'h3') {
          let subSubUl = currentLi.querySelector('ul');
          if (!subSubUl) {
            subSubUl = document.createElement('ul');
            currentLi.appendChild(subSubUl);
          }
          subSubUl.appendChild(li);
        }
      });

      tocDiv.appendChild(tocList);
      observeHeaders(headers, tocList);
    }
  }
}

function observeHeaders(headers, tocList) {
  let activeTocItem = null;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id;
        const tocLink = tocList.querySelector(`a[href="#${id}"]`).parentElement;

        if (id === 'header-0') {
          if (entry.isIntersecting || window.scrollY < entry.boundingClientRect.top) {
            if (activeTocItem) {
              activeTocItem.classList.remove('active');
            }
            tocLink.classList.add('active');
            activeTocItem = tocLink;
          }
        } else if (entry.isIntersecting) {
          if (activeTocItem) {
            activeTocItem.classList.remove('active');
          }
          tocLink.classList.add('active');
          activeTocItem = tocLink;
        }
      });
    },
    {
      rootMargin: '0px 0px -95% 0px',
      threshold: 0.5
    }
  );

  headers.forEach((header) => observer.observe(header));
  const header0 = document.getElementById('header-0');
  if (header0) {
    const rect = header0.getBoundingClientRect();
    if (rect.top < 0) {
      const tocLink = tocList.querySelector(`a[href="#header-0"]`).parentElement;
      tocLink.classList.add('active');
      activeTocItem = tocLink;
    }
  }
}


document.addEventListener("DOMContentLoaded", function () {
  wrapTablesInModalContent();
  removeClassFromInlineCode();
  initCodeCopy();
  initializeScrollHint();
  addDownloadLinkIcons();
  generateTOC();
  convertImgTitleToStyle();
});