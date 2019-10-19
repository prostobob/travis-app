export interface IEpisode {
    id: string;
    number: number;
    name: string;
    airdate: string;
    description: string;
    imgUrl: string;
    runtime: string;
}

export interface IEpisodeQueryParams {
    showId: string;
    seasonId: string;
    episodeNumber: string;
  }
