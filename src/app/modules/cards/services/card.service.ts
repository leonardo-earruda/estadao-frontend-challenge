import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor(private http: HttpClient) {}

  getAll(name?: string, pageSize?: number) {
    return this.http.get(`https://api.pokemontcg.io/v2/cards?q=name:${name}&pageSize=${pageSize}`);
  }
}
