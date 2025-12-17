import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-tips-accordion',
  standalone: true,
  imports: [],
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
