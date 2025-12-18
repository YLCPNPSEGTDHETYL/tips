import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { marked } from 'marked';
import katex from 'katex';
import Prism from 'prismjs';

// Prismの追加言語サポート
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-python';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private http = inject(HttpClient);

  constructor() {
    this.configureMarked();
  }

  private configureMarked(): void {
    const renderer = new marked.Renderer();

    // コードブロックのハイライト設定
    renderer.code = (code: string, language: string | undefined) => {
      const validLanguage = language && Prism.languages[language] ? language : 'plaintext';
      const highlighted = Prism.highlight(code, Prism.languages[validLanguage], validLanguage);
      return `<pre class="language-${validLanguage}"><code class="language-${validLanguage}">${highlighted}</code></pre>`;
    };

    marked.setOptions({
      renderer,
      gfm: true,
      breaks: true,
    });
  }

  /**
   * Markdownファイルを読み込んでHTMLに変換
   */
  loadMarkdown(path: string): Observable<string> {
    return this.http.get(path, { responseType: 'text' }).pipe(
      map(markdown => this.renderMarkdown(markdown))
    );
  }

  /**
   * Markdownテキストを HTML に変換
   */
  private renderMarkdown(markdown: string): string {
    // 1. KaTeX数式を処理（$$...$$）
    let processed = this.processKatexBlock(markdown);

    // 2. インライン数式を処理（$...$）
    processed = this.processKatexInline(processed);

    // 3. Markdownを HTMLに変換
    const html = marked.parse(processed) as string;

    return html;
  }

  /**
   * ブロック数式（$$...$$）をKaTeXでレンダリング
   */
  private processKatexBlock(text: string): string {
    return text.replace(/\$\$([\s\S]+?)\$\$/g, (match, equation) => {
      try {
        return katex.renderToString(equation.trim(), {
          displayMode: true,
          throwOnError: false
        });
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (_) {
        return `<span class="katex-error">Error rendering equation</span>`;
      }
    });
  }

  /**
   * インライン数式（$...$）をKaTeXでレンダリング
   */
  private processKatexInline(text: string): string {
    // $$...$$と混同しないように、$$で囲まれていないものだけマッチ
    return text.replace(/(?<!\$)\$(?!\$)(.+?)(?<!\$)\$(?!\$)/g, (match, equation) => {
      try {
        return katex.renderToString(equation.trim(), {
          displayMode: false,
          throwOnError: false
        });
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (_) {
        return `<span class="katex-error">Error</span>`;
      }
    });
  }
}
