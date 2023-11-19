import { Attack } from './Attack';
import { Image } from './Image';

export interface Card {
  id: string;
  evolvesFrom: string;
  superType: string;
  images: Image;
  name: string;
  attacks: Attack[];
  hp: string;
}
