import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';
import { IEpisode, IEpisodeQueryParams } from '../../models/episode.interface';
import { SerializeService } from '../../services/serialize.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.sass']
})
export class EpisodeComponent implements OnInit {
  episode$: Observable<IEpisode>;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private serializeService: SerializeService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((data: Params) => {
      console.log(data);
      const req: IEpisodeQueryParams = {
        showId: data['id'],
        seasonId: data['seasonId'],
        episodeNumber: data['number']
      };
      console.log(req);
      this.getEpisode(req);
    });
  }

  getEpisode(data: IEpisodeQueryParams) {
    this.episode$ = this.apiService
      .getEpisodeByNumber(data)
      .pipe(map(res => this.serializeService.convertEpisode(res)));
  }
}
