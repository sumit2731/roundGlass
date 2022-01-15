import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {CardService} from '../card.service';
import { Card, StyleObject } from '../card/card-interface.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  constructor(private cardService: CardService) {}
  cardList: Card[] = [];
  cardList$!:Observable<Card[]>;
  cardCoverImageUrl = 'https://www.w3schools.com/cssref/mountain.jpg'; 
  
  styleObject:StyleObject = {
    width: '200px',
    height: '250px',
    'border-radius':  '2%'
  };

  /**
   * @Feature Detsruturing
   */
  ngOnInit(): void {
    this.cardList$ = this.cardService.getCardData().pipe(
      map(cards => cards.map(card => ({...card, cardData: {id: card.index}})))
    );
  }

  showCardDetails(cardData: any,i: number) {
    this.cardService.getCardDetails(cardData.id).subscribe(cardDetail => {
      console.log(`Showing Details for card with id ${cardDetail.cardId}`);
    });
  }

}
