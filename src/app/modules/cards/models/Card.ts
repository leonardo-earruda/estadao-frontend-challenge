import { Attack } from './Attack';
import { Image } from './Image';

export interface Card {
  id: string;
  evolvesFrom: string;
  supertype: string;
  types: string[];
  images: Image;
  name: string;
  attacks: Attack[];
  hp: string;
}
