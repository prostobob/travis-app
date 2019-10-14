import { Injectable } from '@angular/core';
import { ICard } from '../models/card.interface';

@Injectable()
export class SharedService {
  shows: ICard[];

  constructor() {}

  getDateNow(): string {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }

  addViewedShows(show: ICard) {
    localStorage.setItem(show.id, JSON.stringify(show));
  }

  getViewedShows(): ICard[] {
    const cardList = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length && i < 6; i++) {
        const key = localStorage.key(i);
        const value = JSON.parse(localStorage.getItem(key));
        cardList.push(value);
      }
    }
    return cardList;
  }
}
