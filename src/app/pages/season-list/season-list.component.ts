import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-season-list',
  templateUrl: './season-list.component.html',
  styleUrls: ['./season-list.component.sass']
})
export class SeasonListComponent implements OnInit {

  episodes$: Observable<any>;

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(data => {
      this.episodes$ = this.apiService.getEpisodes(data.get('seasonId'));
    });
  }

}
