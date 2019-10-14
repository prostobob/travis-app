import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { SerializeService } from './serialize.service';
import { Observable } from 'rxjs';
import { IBanner } from '../models/banner.interface';

@Injectable()
export class ApiService {
  private apiUrl = 'http://api.tvmaze.com/';
  private country = 'US';
  constructor(
    private http: HttpClient,
    private serializeService: SerializeService
  ) {}

  getScheduleEntity(timestamp: string): Observable<any> {
    return this.http
      .get(`${this.apiUrl}schedule?country=${this.country}&date=${timestamp}`)
      .pipe(map(data => this.serializeService.convertBanner(data[0].show)));
  }

  getSingleEntity(id: string) {
    return this.http.get(`${this.apiUrl}shows/${id}`);
  }

  getEntitys() {
    return this.http.get(`http://api.tvmaze.com/shows/`);
  }

  getEntitysByQuery(query: string) {
    return this.http.get(`${this.apiUrl}search/shows?q=${query}`);
  }

  getSeasons(id: string) {
    return this.http.get(`${this.apiUrl}shows/${id}/seasons`);
  }
}
