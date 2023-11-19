import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDecksComponent } from './components/create-decks/create-decks.component';
import { AllDecksComponent } from './components/all-decks/all-decks.component';
import { DeckDetailsComponent } from './components/deck-details/deck-details.component';

const routes: Routes = [
  { path: 'new/:id', component: CreateDecksComponent },
  { path: 'new', component: CreateDecksComponent },
  { path: 'all', component: AllDecksComponent },
  { path: 'details/:id', component: DeckDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DecksRoutingModule {}
