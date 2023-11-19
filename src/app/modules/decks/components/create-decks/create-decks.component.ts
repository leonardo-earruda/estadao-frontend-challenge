import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from 'src/app/modules/cards/models/Card';
import { CardService } from 'src/app/modules/cards/services/card.service';

@Component({
  selector: 'app-create-decks',
  templateUrl: './create-decks.component.html',
  styleUrls: ['./create-decks.component.css'],
})
export class CreateDecksComponent implements OnInit {
  availableCards: Card[] = [];
  choosenCards: Card[] = [];
  allDecks: Array<{ name: string; cards: Array<any>; id: string }> = [];
  isEditing: boolean = false;
  id: string;
  currentDeck: any = '';
  deckName: FormControl = new FormControl(null, [Validators.required]);

  constructor(
    private cardService: CardService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.isEditing = !!this.route.snapshot.params['id'];
    this.id = this.route.snapshot.params['id'];
    this.allDecks = JSON.parse(localStorage.getItem('decks')!);
    this.getAllCards();
    this.handleEditing();
  }

  private getAllCards() {
    this.cardService.getAll().subscribe((res: any) => {
      this.availableCards = res.data;
    });
  }

  drop(event: any) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  saveDeck() {
    this.isEditing ? this.update() : this.create();
  }

  private create() {
    if (this.isValidDeck()) {
      const newDeck = {
        name: this.deckName.value,
        cards: [...this.choosenCards],
        id: crypto.randomUUID(),
      };
      this.allDecks.push(newDeck);
      this.setItemAndNavigate(this.allDecks);
    }
  }

  private setItemAndNavigate(arr: any) {
    localStorage.setItem('decks', JSON.stringify(arr));
    this.router.navigate(['/decks/all']);
  }

  private update() {
    const decks = JSON.parse(localStorage.getItem('decks')!);
    this.currentDeck = decks.find((res: any) => res.id.includes(this.id));

    if (this.isValidDeck()) {
      const newDeck = {
        name: this.deckName.value,
        cards: [...this.choosenCards],
        id: this.currentDeck.id,
      };

      const filtered = this.allDecks.filter(
        (deck) => deck.id !== this.currentDeck.id
      );

      filtered.push(newDeck);
      this.setItemAndNavigate(filtered);
    }
  }

  public isValidDeck() {
    return (
      this.choosenCards.length >= 24 &&
      this.choosenCards.length <= 60 &&
      !this.hasFiveCopiesWithSameName()
    );
  }

  hasFiveCopiesWithSameName() {
    const nameCount: any = {};

    for (const item of this.choosenCards) {
      const name = item.name;

      nameCount[name] = (nameCount[name] || 0) + 1;

      if (nameCount[name] > 4) {
        return true;
      }
    }

    return false;
  }

  handleEditing() {
    if (this.isEditing) {
      const decks = JSON.parse(localStorage.getItem('decks')!);
      this.currentDeck = decks.find((res: any) => res.id.includes(this.id));
      this.deckName.setValue(this.currentDeck.name);
      this.choosenCards = this.currentDeck.cards;
    }
    return;
  }
}
