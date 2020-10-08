export class Movie {
  title: string;
  year: number;
  imdbId: string;
  type: string;
  posterURL: string
}

export class MovieDetail {
    title: string;
    year: number;
    rated: string;
    released: Date;
    runtime: string;
    genre: string;
    director: string;
    writer: string;
    actors: string;
    plot: string;
    language: string;
    country: string;
    awards: string;
    poster: string;
    ratings: [
        {
            source: string;
            value: string;
        }
    ];
    metascore: number;
    imdbRating: number;
    imdbVotes: number;
    imdbId: string;
    type: string;
    DVD: string;
    boxOffice: string;
    production: string;
    website: string;
    response: boolean;
}
