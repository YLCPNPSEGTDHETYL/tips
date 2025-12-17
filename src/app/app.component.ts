import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TipsGlobalHeaderComponent } from './components/tips-global-header/tips-global-header.component';
import { TipsFooterComponent } from './components/tips-footer/tips-footer.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, TipsGlobalHeaderComponent, TipsFooterComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {
	title = 'Research Repository';
}
