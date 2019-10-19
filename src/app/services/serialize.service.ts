import { Injectable } from '@angular/core';
import { IBanner } from '../models/banner.interface';
import { ICard } from '../models/card.interface';
import { ISeasonsList } from '../models/seasonsList.interface';
import { IEpisode } from '../models/episode.interface';

@Injectable()
export class SerializeService {
  constructor() {}

  convertBanner(res): IBanner {
    console.log(res);
    const banner = {
      id: res.id,
      name: res.name,
      image: res.image.medium,
      premiered: res.premiered,
      url: res.url,
      season: res.season,
      type: res.type
    };
    return banner;
  }

  convertCardList(res): ICard[] {
    return res.slice(0, 6).map(item => {
      return {
        id: item.show.id,
        name: item.show.name,
        imgUrl: item.show.image.medium,
        rating: item.show.rating.average,
        description: item.show.summary
      };
    });
  }

  convertCard(res): ICard {
    const show: ICard = {
      id: res.id,
      name: res.name,
      imgUrl: res.image.medium,
      networkName: res.network.name,
      rating: res.rating.average,
      description: res.summary,
      status: res.status,
      showType: res.type
    };
    return show;
  }

  convertSeasonList(res): ISeasonsList {
    return res.map(item => {
      return {
        id: item.id,
        number: item.number,
        premiereDate: item.premiereDate
      };
    });
  }

  convertEpisode(res): IEpisode {
    const episode = {
      id: res.id,
      number: res.number,
      name: res.name,
      airdate: res.airdate,
      description: res.summary,
      imgUrl: res.image.medium,
      runtime: res.runtime
    };
    return episode;
  }

  convertEpisodeList(res) {
    return res.map(item => {
      return this.convertEpisode(item);
    });
  }
}
