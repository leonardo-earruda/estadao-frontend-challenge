import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NavigationComponent } from './core/navigation/navigation.component';

const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    children: [
      {
        path: 'decks',
        loadChildren: () =>
          import('./modules/decks/decks.module').then((m) => m.DecksModule),
      },
      {
        path: 'cards',
        loadChildren: () =>
          import('./modules/cards/cards.module').then((m) => m.CardsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
