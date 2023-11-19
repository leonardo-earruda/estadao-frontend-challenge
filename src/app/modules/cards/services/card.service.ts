import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get('https://api.pokemontcg.io/v2/cards');
  }
}
