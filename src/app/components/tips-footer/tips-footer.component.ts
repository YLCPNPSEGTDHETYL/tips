import { Component } from '@angular/core';

@Component({
  selector: 'app-tips-footer',
  standalone: true,
  imports: [],
  templateUrl: './tips-footer.component.html',
  styleUrl: './tips-footer.component.scss'
})
export class TipsFooterComponent {
  currentYear = new Date().getFullYear();
}
