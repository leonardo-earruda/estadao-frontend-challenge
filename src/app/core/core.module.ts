import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/material/material/material.module';
import { SharedModule } from '../modules/shared/shared.module';
import { DecksModule } from '../modules/decks/decks.module';
import { CardsModule } from '../modules/cards/cards.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [NavigationComponent, HomeComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    DecksModule,
    CardsModule,
    AppRoutingModule
  ],
  exports: [NavigationComponent, HomeComponent],
})
export class CoreModule {}
