import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { SerializeService } from './serialize.service';
import { Observable } from 'rxjs';
import { IEpisodeQueryParams } from '../models/episode.interface';

@Injectable()
export class ApiService {
  private apiUrl: string;
  private country: string;
  constructor(
    private http: HttpClient,
    private serializeService: SerializeService
  ) {
    this.apiUrl = 'https://api.tvmaze.com/';
    this.country = 'US';
  }

  getScheduleEntity(timestamp: string): Observable<any> {
    return this.http
      .get(`${this.apiUrl}schedule?country=${this.country}&date=${timestamp}`)
      .pipe(map(data => this.serializeService.convertBanner(data[0].show)));
  }

  getSingleEntity(id: string) {
    return this.http.get(`${this.apiUrl}shows/${id}`);
  }

  getEntitysByQuery(query: string) {
    return this.http.get(`${this.apiUrl}search/shows?q=${query}`);
  }

  getSeasons(id: string) {
    return this.http.get(`${this.apiUrl}shows/${id}/seasons`);
  }

  getEpisodes(id: string) {
    return this.http.get(`${this.apiUrl}seasons/${id}/episodes`);
  }

  getEpisodeByNumber(data: IEpisodeQueryParams) {
    console.log(data);
    return this.http.get(
      `${this.apiUrl}shows/${data.showId}/episodebynumber?season=${data.seasonId}&number=${data.episodeNumber}`
    );
  }
}
