import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Card} from "./card/card-interface.model";
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private httpService: HttpClient) {}

  /**
   * @Feature Genertics, Implicit retun type from fucntion
   */
  getCardData() {
    return this.httpService.get<Card[]>('assets/cards.json');
  }

  getCardDetails(cardId: number) {
    return of({cardId});
  }
}
