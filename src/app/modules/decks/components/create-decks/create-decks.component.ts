import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PAGE_SIZES } from 'src/app/config/pageSizes';
import { Card } from 'src/app/modules/cards/models/Card';
import { CardService } from 'src/app/modules/cards/services/card.service';
import { Deck } from '../../models/Deck';

@Component({
  selector: 'app-create-decks',
  templateUrl: './create-decks.component.html',
  styleUrls: ['./create-decks.component.css'],
})
export class CreateDecksComponent implements OnInit {
  availableCards: Card[] = [];
  choosenCards: Card[] = [];
  allDecks: Deck[] = [];
  isEditing: boolean = false;
  id: string;
  currentDeck: Deck;
  deckName: FormControl = new FormControl(null, [Validators.required,Validators.maxLength(20)]);
  filterForm: FormGroup;
  pageSizes: number[] = PAGE_SIZES;
  isLoading: boolean = false;

  constructor(
    private cardService: CardService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initializeFormGroup();
    this.getCards();
    this.isEditing = !!this.route.snapshot.params['id'];
    this.id = this.route.snapshot.params['id'];
    this.allDecks = JSON.parse(localStorage.getItem('decks')!) ?? [];
    this.handleEditing();
  }

  initializeFormGroup() {
    this.filterForm = new FormGroup({
      name: new FormControl(''),
      pageSize: new FormControl(''),
    });
  }

  public getCards() {
    this.isLoading = true;
    const name = this.filterForm.value.name ? this.filterForm.value.name : null;
    const pageSize = this.filterForm.value.pageSize
      ? this.filterForm.value.pageSize
      : null;

    this.cardService.getAll(name, pageSize).subscribe((res: any) => {
      this.isLoading = false;
      this.availableCards = res.data;
    });
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

  handleEditing() {
    if (this.isEditing) {
      const decks = JSON.parse(localStorage.getItem('decks')!);
      this.currentDeck = decks.find((res: any) => res.id.includes(this.id));
      this.deckName.setValue(this.currentDeck.name);
      this.choosenCards = this.currentDeck.cards;
    }
    return;
  }

  saveDeck() {
    this.isEditing ? this.update() : this.create();
  }

  public isValidDeck() {
    return (
      this.choosenCards.length >= 24 &&
      this.choosenCards.length <= 60 &&
      !this.hasFiveCopiesWithSameName()
    );
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

  private setItemAndNavigate(arr: any) {
    localStorage.setItem('decks', JSON.stringify(arr));
    this.router.navigate(['/decks/all']);
  }
}
