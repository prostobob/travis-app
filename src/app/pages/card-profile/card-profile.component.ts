import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { map, takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { SerializeService } from '../../services/serialize.service';
import { ICard } from '../../models/card.interface';
import { SharedService } from '../../services/shared.service';
import { ISeasonsList } from '../../models/seasonsList.interface';

@Component({
  selector: 'app-card-profile',
  templateUrl: './card-profile.component.html',
  styleUrls: ['./card-profile.component.sass']
})
export class CardProfileComponent implements OnInit, OnDestroy {
  show$: Observable<ICard>;
  seasonsList$: Observable<ISeasonsList>;
  unsubscribe$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private serializeService: SerializeService,
    private sharedService: SharedService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(data => {
      this.getShow(data.get('id'));
      this.getSesonsList(data.get('id'));
    });

    this.show$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(data => this.sharedService.addViewedShows(data));
  }

  getShow(id: string) {
    this.show$ = this.apiService
      .getSingleEntity(id)
      .pipe(map(data => this.serializeService.convertCard(data)));
  }

  getSesonsList(id: string) {
    this.seasonsList$ = this.apiService
      .getSeasons(id)
      .pipe(map(data => this.serializeService.convertSeasonList(data)));
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
