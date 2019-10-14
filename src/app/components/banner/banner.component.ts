import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { IBanner } from 'src/app/models/banner.interface';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.sass']
})
export class BannerComponent implements OnInit {

  @Input() banner: IBanner;
  @Input() title: string;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

}
