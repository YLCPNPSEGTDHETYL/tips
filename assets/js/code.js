Prism.languages.latex = {
    verb: {
        pattern: /\\verb([!"#$&'()\+\-\.,\/:;<=>?@\[\\\]^_`{|}~]).*?\1/,
        inside: {
            'keyword': /\\verb/,
            'punctuation': /[!"#$&'()\+\-\.,\/:;<=>?@\[\\\]^_`{|}~]/,
        }
    },
    comment: {
        pattern: /%.*/,
    },
    function: /\\(?:frac|sqrt|left|right|caption|includegraphics|footnote|footnotemark|footnotetext|tableofcontents|listoffigures|listoftables|setlength|pagestyle|sectionmark|subsectionmark|chaptermark|thispagestyle|fancypagestyle|textbf|textit|texttt|textsf|textsc|textnormal|textup|textmd|textsl|textsf|texttt|textcolor|color|textbackground|DeclareMathOperator|newcommand|AtBeginDocument|RenewCommandCopy|renewcommand|providecommand|DeclareSymbolFont|DeclareMathSymbol|encodingdefault|familydefault|SetSymbolFont|newtheorem|renewtheorem|newenvironment|renewenvironment|newcounter|setcounter|addtocounter|stepcounter|refstepcounter|makeatletter|makeatother|bibliography|printbibliography|bibliographystyle|thebibliography|addbibresource|verbatim|minted|lstlisting)\b/,
    keyword: {
        pattern: /\\(?:begin|end)\{([a-zA-Z0-9\-]+)\}/,
        inside: {
            "environment": /\\(?:begin|end)/,
            "package": /[a-zA-Z0-9\-]+/,
            "punctuation": /[{}]/
        },
    },
    package: /\b(?:adjustbox|algorithmicx|amscls|amsfonts|amsmath|amssymb|amsthm|appendix|arev|arydshln|array|atbegshi|autobreak|autonum|babel|bbm|biblatex|bigdelim|bm|bmpsize|booktabs|breqn|bxjalipsum|bxpapersize|bxpdfver|calc|caption|cases|cleveref|comment|csquotes|ctable|datetime2|dcolumn|delarray|derivative|diffcoeff|diagbox|empheq|enumitem|epigraph|esint|etoolbox|euscript|fancyhdr|fancyvrb|feyn|float|fontenc|fontspec|fourier|fouriernc|framed|fvextra|geometry|gensymb|gnuplottex|graphicx|hep-th|hyperref|hypcap|ifthen|import|inputenc|interval|jlreq|jtygm|koma-script|latexmk|listings|lipsum|longtable|lscape|makecell|makeidx|mathastext|mathbbol|mathdesign|mathdots|mathpazo|mathptmx|mathrsfs|mathtools|mhchem|minitoc|minitoc-ja|minted|multirow|multibib|multicol|multido|natbib|newfloat|newpxmath|newpxtext|newtxmath|newtxtext|nicematrix|overpic|pdfpages|physics|plistings|platex-tools|polyglossia|prettyref|pst-plot|pxbase|pxjahyper|pxrubrica|pygmentex|siunitx|showlabels|soul|standalone|stix2|subcaption|subfiles|tabularx|tcolorbox|tensor|textcomp|titlesec|tocbibind|tocloft|todonotes|twemojis|ulem|unicode-math|units|upgreek|url|verbatim|wasysym|wrapfig|xcolor|xfrac|xparse|xr|zref|zref-check|zref-clever|zref-xr|zlm|article|jarticle|jbook|jreport|jltxdoc|jsarticle|jreport|jspf|jlreq|tarticle|tbook|treport|tufte-book|memoir|beamer|book|report|bxjsarticle|bxjsbook|bxjsreport|revtex4|amsart|amsbook|amsdtx|amsproc)\b/,
    environment: /\\(?:documentclass|usepackage|begin|end|chapter|section|subsection|subsubsection|paragraph|subparagraph|usephysicsmodule)\b/,
    punctuation: /[{}[\]]/, 
    selector: /\\[a-zA-Z]+/,
    argument: /{[^}]*}/,
    "special-command": /\\(?:|new|renew|provide|Declare|Set|Add|step|refstep|value|makeat)/, symbol: /[&^_$\\]/
};

Prism.languages.bibtex = {
    comment: /%.*$/,
    entry: {
        pattern: /^\s*@(?:article|book|booklet|inbook|incollection|inproceedings|conference|manual|mastersthesis|misc|phdthesis|proceedings|techreport|unpublished|文献タイプ)\s*\{[^,]*\s*,/m,
        inside: {
            keyword: { pattern: /@(\w+|文献タイプ)/, alias: 'variable' },
            key: {
                pattern: /(?<=\{)([^,]+)/,
                alias: 'string'
            },
        }
    },
    field: {
        pattern: /(?:address|annote|author|booktitle|chapter|crossref|doi|edition|editor|email|howpublished|institution|issue|journal|key|month|note|number|numpages|organization|pages|publisher|school|series|title|type|volume|year|yomi|eprint|doi|pubmed|url|lastchecked|フィールド値1|フィールド値2|フィールド値n)(?=\s*=\s*)/g,
        inside: {
            value: {
                pattern: /(?<=(?:address|annote|author|booktitle|chapter|crossref|doi|edition|editor|email|howpublished|institution|issue|journal|key|month|note|number|numpages|organization|pages|publisher|school|series|title|type|volume|year|yomi|eprint|doi|pubmed|url|lastchecked)\s*=\s*({|"))([^{}]*(?:\{[^}]*\}[^{}]*)*)(?=(}|")|,\s*[a-z]*\s*=\s*({|"))/,
                alias: 'string'
            },
        }
    },
    punctuation: /[{}=,"']/,
};





export function initCodeCopy() { let e = document.querySelectorAll('code[class*="language-"]'); async function t(e) { return new Promise((e, t) => { var $ = document.createElement("textarea"); $.value = copyInfo.getText(), $.style.top = "0", $.style.left = "0", $.style.position = "fixed", document.body.appendChild($), $.focus(), $.select(); try { var _ = document.execCommand("copy"); setTimeout(function () { _ ? e("success") : t("error") }, 1) } catch (n) { setTimeout(function () { t(n) }, 1) } finally { document.body.removeChild($) } }) } async function $(e) { return new Promise(($, _) => { navigator.clipboard ? navigator.clipboard.writeText(e).then($(), function () { t(e).then(() => $(), () => _()) }) : t(e).then(() => $(), () => _()) }) } function _(e) { let t = e.currentTarget, _ = t.dataset.lang, n = e.currentTarget.previousSibling.children[0].textContent; $(n).then(() => { t.innerHTML = 'copied! <svg viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.007-1H7zm2 0h8v10h2V4H9v2z" fill="currentColor"/></svg>', t.setAttribute("style", "opacity: 1") }, () => alert("failed to copy")), setTimeout(() => { t.removeAttribute("style"), t.innerHTML = `${_} <svg viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.007-1H7zM5.003 8L5 20h10V8H5.003zM9 6h8v10h2V4H9v2z" fill="currentColor"/></svg>` }, 3e3) } e.forEach(e => { let t = function e(t) { let $ = t.className; if ($.startsWith("language")) { let [_, n] = $.split("-"); return n } }(e), $ = e.parentElement, _ = e.parentElement.parentElement, n = document.createElement("div"); n.className = "code-wrapper", _.insertBefore(n, $), n.append(e.parentElement); let l = document.createElement("button"); l.setAttribute("class", "copy-button"), l.setAttribute("data-lang", t), l.innerHTML = `${t} <svg viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.007-1H7zM5.003 8L5 20h10V8H5.003zM9 6h8v10h2V4H9v2z" fill="currentColor"/></svg>`, n.insertAdjacentElement("beforeend", l) }); let n = document.querySelectorAll(".copy-button"); n.forEach(e => { e.addEventListener("click", _) }) }
