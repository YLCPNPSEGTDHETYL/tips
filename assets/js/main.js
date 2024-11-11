


export function isSmallTouchDevice() {
    return window.matchMedia('(max-width: 640px)').matches &&
        ('ontouchstart' in window || navigator.maxTouchPoints > 0);
}

export function isTouchDevice() {
    return ('ontouchstart' in window || navigator.maxTouchPoints > 0);
}


export function markdownImageSize(md) {
    md.renderer.rules.image = (tokens, idx, options, env, self) => {
      const token = tokens[idx];
      const src = token.attrGet('src');
      const alt = token.content;
      const title = token.attrGet('title') || '';
  
      let style = '';
      const maxWidthMatch = title.match(/max-width\s*=\s*(\d+px)/);
      if (maxWidthMatch) {
        style = `max-width: ${maxWidthMatch[1]};`;
      }
  
      return `<img src="${src}" alt="${alt}" style="${style}" />`;
    };
  }
  
// *FUNC DEF* Convert Markdown LaTeX blocks to HTML with class
export function convertLatexBlocksToHTML(content) {
    let updatedContent = content.replace(/```latex/g, '<pre class="line-numbers language-latex"><code class="language-latex">');
  
    updatedContent = updatedContent.replace(/```/g, '</code></pre>');
  
    return updatedContent;
  }


//---------------------------//

let scrollHintInstance = null;

function initializeScrollHint() {
    // ScrollHintの初期化
    scrollHintInstance = new ScrollHint('.table-content', {
        suggestiveShadow: true,
        remainingTime: 8000,
        i18n: {
            scrollable: 'スクロールできます'
        }
    });
}

let start_position = 0,
    window_position,
    $window = $(window),
    $header = $('#header'),
    header_height;


document.addEventListener('DOMContentLoaded', function () {
    header_height = $("#header").height();
    if (!isSmallTouchDevice()) {
        $("article").css("margin-top", header_height + 20);
    }
    document.body.classList.add('js-loaded');
});


$window.on('scroll', function () {
    window_position = $(this).scrollTop();

    if (window_position <= start_position) {
        $header.css('top', '0');
    } else {
        $header.css('top', - header_height);
    }
    start_position = window_position;

});

$window.trigger('scroll');

//global func
window.initializeScrollHint = initializeScrollHint;

document.addEventListener("DOMContentLoaded", function () {
  if (window.location.hash && /^#modal-\d+$/.test(window.location.hash)) {
      history.pushState("", document.title, window.location.pathname + window.location.search);
  }
});



function toggleClassForSmallTouchDevice() {
    const element = document.querySelector('.all-wrapper');
    if (element) {
        if (isSmallTouchDevice()) {
            element.classList.add('SP-only');
        } else {
            element.classList.remove('SP-only');
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    toggleClassForSmallTouchDevice();
});

window.addEventListener('resize', function () {
    toggleClassForSmallTouchDevice();
});



document.addEventListener("DOMContentLoaded", () => {
  setUpAccordion();
});
const setUpAccordion = () => {
  const details = document.querySelectorAll(".details");
  const IsOpenedClass = "is-opened";
  details.forEach((element) => {
    const summary = element.querySelector(".summary");
    const content = element.querySelector(".details-content");

    summary.addEventListener("click", (event) => {
      event.preventDefault();
      if (element.classList.contains(IsOpenedClass)) {
        element.classList.toggle(IsOpenedClass);

        closingAnim(content, element).restart();
      } else {
        element.classList.toggle(IsOpenedClass);

        element.setAttribute("open", "true");

        openingAnim(content).restart();
      }
    });
  });
}

const closingAnim = (content, element) => gsap.to(content, {
  height: 0,
  opacity: 0,
  duration: 0.4,
  ease: "power3.out",
  overwrite: true,
  onComplete: () => {
    element.removeAttribute("open");
  },
});

const openingAnim = (content) => gsap.fromTo(
  content,
  {
    height: 0,
    opacity: 0,
  },
  {
    height: "auto",
    opacity: 1,
    duration: 0.4,
    ease: "power3.out",
    overwrite: true,
  });


document.addEventListener("DOMContentLoaded", function() {
  const exLinks = document.querySelectorAll("span.exlink a");

  exLinks.forEach(link => {
      const icon = document.createElement("img");
      icon.className = "ic ic-external-link";
      icon.src = "/tips//assets/icon/external-link.svg";
      icon.alt = "external-link";

      link.insertAdjacentElement("afterbegin", icon);
      link.setAttribute("target", "_blank");
  });

  const familyLinks = document.querySelectorAll("span.familylink a");

  familyLinks.forEach(link => {
      const icon = document.createElement("img");
      icon.className = "ic ic-family-link";
      icon.src = "/tips//assets/icon/family-link.svg";
      icon.alt = "family-link";

      link.insertAdjacentElement("afterbegin", icon);
  });

  const inLinks = document.querySelectorAll("span.inlink a");
  inLinks.forEach(link => {
      const icon = document.createElement("img");
      icon.className = "ic ic-inside-link";
      icon.src = "/tips/assets/icon/inside-link.svg";
      icon.alt = "inside-link";
      link.insertAdjacentElement("afterbegin", icon);
  });
});


document.querySelectorAll('.prevent-context').forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
  });
  link.addEventListener('contextmenu', (event) => {
    event.preventDefault();
  });
  link.addEventListener('touchstart', (event) => {
    event.preventDefault();
  });
});

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
  