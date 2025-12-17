import { Component } from '@angular/core';

import { RouterLink } from '@angular/router';
import { NAVIGATION_DATA, getTagColor, getTagText } from '../../data/navigation';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [RouterLink],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss'
})
export class HomeComponent {
	title = 'Research Repository';
	categories = NAVIGATION_DATA;

	getTagColor = getTagColor;
	getTagText = getTagText;
}
