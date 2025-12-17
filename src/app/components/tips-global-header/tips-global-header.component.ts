import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-tips-global-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './tips-global-header.component.html',
  styleUrl: './tips-global-header.component.scss'
})
export class TipsGlobalHeaderComponent {

}
