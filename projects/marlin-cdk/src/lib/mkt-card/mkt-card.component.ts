import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MktCard } from './model/mkt-card.interface';

@Component({
  selector: 'mkt-card',
  templateUrl: './mkt-card.component.html',
  styleUrls: ['./mkt-card.component.css']
})
export class MktCardComponent implements OnInit {

  @Input()
  cardConfiguration: MktCard;


  @Output()
  onCardClicked: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  onCardClick($event: any) {
    this.onCardClicked.emit(this.cardConfiguration);
  }

}
