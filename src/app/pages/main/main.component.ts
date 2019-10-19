import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { ApiService } from 'src/app/services/api.service';
import { Observable } from 'rxjs';
import { IBanner } from '../../models/banner.interface';
import { map } from 'rxjs/operators';
import { SerializeService } from 'src/app/services/serialize.service';
import { Title } from '../../models/title.enum';
import { ICard } from 'src/app/models/card.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  scheludedBanner$: Observable<IBanner>;
  popularBanner$: Observable<IBanner>;
  recomendedCardList$: Observable<ICard[]>;
  viewedCardList: ICard[];
  titles;

  constructor(
    private sharedService: SharedService,
    private apiService: ApiService,
    private serializeService: SerializeService
  ) {
    this.titles = Title;
  }

  ngOnInit() {
    this.getScheduledBanner();
    this.getPopularBanner();
    this.getRecomendedCards();
    this.getViewedCardList();
  }

  getScheduledBanner() {
    const timestamp = this.getTimestamp();
    console.log(timestamp);
    this.scheludedBanner$ = this.apiService.getScheduleEntity(timestamp);
  }

  getPopularBanner() {
    this.popularBanner$ = this.apiService
      .getSingleEntity('6771')
      .pipe(map(data => this.serializeService.convertBanner(data)));
  }

  getRecomendedCards() {
    this.recomendedCardList$ = this.apiService
      .getEntitysByQuery('girls')
      .pipe(
        map(data => this.serializeService.convertCardList(data)));
  }

  getViewedCardList() {
    this.viewedCardList = this.sharedService.getViewedShows();
  }

  getTimestamp() {
    return this.sharedService.getDateNow();
  }
}
