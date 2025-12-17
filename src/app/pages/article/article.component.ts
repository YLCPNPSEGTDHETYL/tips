import { Component, inject } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  template: `
    <div class="article-container">
      <h1>{{ articlePath }}</h1>
      <p>記事ページ（準備中）</p>
      <p>マークダウンコンテンツの読み込み機能は次のタスクで実装します。</p>
    </div>
  `,
  styles: [`
    .article-container {
      max-width: 800px;
      margin: 2rem auto;
      padding: 2rem;
      font-family: var(--tips-font-sans);
    }

    h1 {
      font-size: var(--tips-font-size-title-l);
      color: var(--tips-text-primary);
      margin-bottom: var(--tips-spacing-lg);
    }

    p {
      font-size: var(--tips-font-size-body-md);
      line-height: var(--tips-line-height-relaxed);
      color: var(--tips-text-secondary);
      margin: var(--tips-spacing-md) 0;
    }
  `]
})
export class ArticleComponent {
  private route = inject(ActivatedRoute);
  articlePath = '';

  constructor() {
    this.route.url.subscribe(segments => {
      this.articlePath = segments.map(s => s.path).join('/');
    });
  }
}
