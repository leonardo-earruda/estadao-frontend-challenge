import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getAll(name?: string, pageSize?: number) {
    const formattedName = name?.replace(/\s/g, '.');

    if (!name && !pageSize) {
      return this.http.get(`${this.baseUrl}/cards`);
    }
    return this.http.get(
      `${this.baseUrl}/cards?q=name:${formattedName}&pageSize=${pageSize}`
    );
  }
}
