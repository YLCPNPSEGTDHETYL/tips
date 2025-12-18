import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ContentService } from '../../services/content.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="article-container">
      @if (loading) {
        <p>読み込み中...</p>
      } @else if (error) {
        <p class="error">{{ error }}</p>
      } @else {
        <div class="article-content" [innerHTML]="htmlContent"></div>
      }
    </div>
  `,
  styles: [`
    .article-container {
      max-width: 800px;
      margin: 2rem auto;
      padding: 2rem;
      font-family: var(--tips-font-sans);
    }

    .error {
      color: var(--tips-error-500, red);
      font-weight: var(--tips-font-weight-bold);
    }

    .article-content {
      h1, h2, h3, h4, h5, h6 {
        color: var(--tips-text-primary);
        margin-top: var(--tips-spacing-lg);
        margin-bottom: var(--tips-spacing-md);
      }

      h1 {
        font-size: var(--tips-font-size-title-l);
        border-bottom: 2px solid var(--tips-border-neutral);
        padding-bottom: var(--tips-spacing-sm);
      }

      h2 {
        font-size: var(--tips-font-size-title-m);
      }

      p {
        font-size: var(--tips-font-size-body-md);
        line-height: var(--tips-line-height-relaxed);
        color: var(--tips-text-secondary);
        margin: var(--tips-spacing-md) 0;
      }

      a {
        color: var(--tips-primary-500);
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }

      ul, ol {
        margin: var(--tips-spacing-md) 0;
        padding-left: var(--tips-spacing-lg);
        color: var(--tips-text-secondary);
      }

      li {
        margin: var(--tips-spacing-xs) 0;
        line-height: var(--tips-line-height-relaxed);
      }

      pre {
        margin: var(--tips-spacing-md) 0;
        border-radius: var(--tips-radius-md);
        overflow-x: auto;
      }

      code {
        font-family: var(--tips-font-mono);
        font-size: 0.9em;
      }

      :not(pre) > code {
        background-color: var(--tips-surface-alt);
        padding: 2px 6px;
        border-radius: var(--tips-radius-sm);
      }
    }
  `]
})
export class ArticleComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private contentService = inject(ContentService);
  private sanitizer = inject(DomSanitizer);

  articlePath = '';
  htmlContent: SafeHtml = '';
  loading = false;
  error = '';

  ngOnInit(): void {
    this.route.url.subscribe(segments => {
      this.articlePath = segments.map(s => s.path).join('/');
      this.loadContent();
    });
  }

  private loadContent(): void {
    // テスト用にsample.mdを読み込む
    // 実際には articlePath に基づいて適切なファイルを読み込む
    const contentPath = `/assets/content/${this.articlePath || 'sample'}.md`;

    this.loading = true;
    this.error = '';

    this.contentService.loadMarkdown(contentPath).subscribe({
      next: (html) => {
        this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(html);
        this.loading = false;
      },
      error: (err) => {
        this.error = `記事を読み込めませんでした: ${err.message}`;
        this.loading = false;
      }
    });
  }
}
