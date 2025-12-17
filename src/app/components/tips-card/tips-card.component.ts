import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tips-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './tips-card.component.html',
  styleUrl: './tips-card.component.scss'
})
export class TipsCardComponent {
  @Input({ required: true }) title!: string;
  @Input() description = '';
  @Input({ required: true }) link!: string;
  @Input() tags: string[] = [];
  @Input() date?: string;
  @Input() thumbnail?: string;
}
