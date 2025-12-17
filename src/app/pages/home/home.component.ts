import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NAVIGATION_DATA, NavigationItem, getTagColor, getTagText } from '../../data/navigation';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [CommonModule, RouterLink],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss'
})
export class HomeComponent {
	title = 'Research Repository';
	categories = NAVIGATION_DATA;

	getTagColor = getTagColor;
	getTagText = getTagText;
}
