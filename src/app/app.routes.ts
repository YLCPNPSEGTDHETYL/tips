import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
	},
	{
		path: ':category',
		loadComponent: () => import('./pages/article/article.component').then(m => m.ArticleComponent)
	},
	{
		path: ':category/:article',
		loadComponent: () => import('./pages/article/article.component').then(m => m.ArticleComponent)
	},
	{
		path: '**',
		redirectTo: ''
	}
];
