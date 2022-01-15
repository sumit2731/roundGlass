import {ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { StyleObject } from './card-interface.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {
  @Input() title: string = 'Demo Title';
  @Input() subtitle: string = 'Demo Subtitle';
  @Input() cardData: any= {};
  @Input() styleObject!: (StyleObject);
  @Input() coverImageUrl!: string;
  @Output() cardClicked = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
    this.coverImageUrl = `url(${this.coverImageUrl})`;
    console.log(this.coverImageUrl);
  }
  
  onCardClicked() {
    this.cardClicked.emit(this.cardData);
  }

}
