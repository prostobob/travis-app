import { Component, OnInit, Input } from '@angular/core';
import { ICard } from '../../models/card.interface';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.sass']
})
export class CardListComponent implements OnInit {

  @Input() title: string;
  @Input() cardList: ICard[];

  constructor() { }

  ngOnInit() {
  }

}
