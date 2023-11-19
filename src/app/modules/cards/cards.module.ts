import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/material/material/material.module';
import { CardsRoutingModule } from './cards-routing.module';
import { AllCardsComponent } from './components/all-cards/all-cards.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [AllCardsComponent, CardComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CardsRoutingModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [],
  exports: [CardComponent],
})
export class CardsModule {}
