import { Card } from '../../cards/models/Card';

export interface Deck {
  name: string;
  cards: Card[];
  id: string;
}
