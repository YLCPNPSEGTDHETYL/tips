import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tips-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tips-accordion.component.html',
  styleUrl: './tips-accordion.component.scss'
})
export class TipsAccordionComponent {
  @Input({ required: true }) title!: string;
  @Input() isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
