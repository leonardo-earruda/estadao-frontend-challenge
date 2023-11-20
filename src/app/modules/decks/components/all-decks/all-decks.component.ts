import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-decks',
  templateUrl: './all-decks.component.html',
  styleUrls: ['./all-decks.component.css'],
})
export class AllDecksComponent implements OnInit {
  allDecks: Array<{ name: string; cards: Array<any>; id: string }> = [];
  isHovering: boolean = false;
  currentIndex: number;

  constructor(private router: Router) {}

  ngOnInit() {
    this.getAllDecks();
  }

  private getAllDecks() {
    this.allDecks = JSON.parse(localStorage.getItem('decks')!);
  }

  removeDeck(id: string) {
    this.allDecks = this.allDecks.filter((deck: any) => deck.id !== id);
    localStorage.setItem('decks', JSON.stringify(this.allDecks));
  }

  onHover(deck: any) {
    this.currentIndex = this.allDecks.indexOf(deck);
    this.isHovering = !this.isHovering;
  }

  updateDeck(id: string) {
    this.router.navigate(['decks/new', id]);
  }

}
