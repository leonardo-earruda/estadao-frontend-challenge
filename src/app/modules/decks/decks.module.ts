import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/material/material/material.module';
import { DecksRoutingModule } from './decks-routing.module';
import { AllDecksComponent } from './components/all-decks/all-decks.component';
import { CreateDecksComponent } from './components/create-decks/create-decks.component';
import { CardsModule } from '../cards/cards.module';
import { DeckDetailsComponent } from './components/deck-details/deck-details.component';

@NgModule({
  declarations: [AllDecksComponent, CreateDecksComponent, DeckDetailsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DecksRoutingModule,
    CardsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [],
})
export class DecksModule {}
