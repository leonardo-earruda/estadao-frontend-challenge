import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-deck-details',
  templateUrl: './deck-details.component.html',
  styleUrls: ['./deck-details.component.css'],
})
export class DeckDetailsComponent implements OnInit {
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  displayedColumns: string[] = ['name', 'supertype', 'hp', 'level', 'rarity'];
  id: string;
  currentDeck: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getDeck();
    this.dataSource.data = this.currentDeck.cards;
  }

  getDeck() {
    const decks = JSON.parse(localStorage.getItem('decks')!);

    this.currentDeck = decks.find((res: any) => res.id.includes(this.id));
  }

  get pokemonSupertypeAmount() {
    return this.currentDeck.cards.filter(
      (card: any) => card.supertype === 'Pokémon'
    ).length;
  }

  get trainerSupertypeAmount() {
    return this.currentDeck.cards.filter(
      (card: any) => card.supertype === 'Pokémon'
    ).length;
  }

  get uniqueDeckType() {
    const allTypes = this.currentDeck.cards.flatMap((card: any) => card.types);
    return new Set(allTypes);
  }
}
