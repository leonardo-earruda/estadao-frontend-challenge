import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NavigationComponent } from './core/navigation/navigation.component';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: NavigationComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
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
