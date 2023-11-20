import { Component } from '@angular/core';
import { Route } from '../model/routes';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  routes: Route[] = [
    {
      path: '/decks/all',
      name: 'BARALHOS',
    },
    {
      path: '/decks/new',
      name: 'NOVO BARALHO',
    },
  ];
}
