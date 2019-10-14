import { Component, OnInit, Input } from '@angular/core';
import { ICard } from '../../models/card.interface';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.sass']
})
export class CardItemComponent implements OnInit {

  @Input() card: ICard;
  constructor() { }

  ngOnInit() {
  }

}
