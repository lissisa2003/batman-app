export class Movie {
  Title: string;
  Year: number;
  imdbID: string;
  Type: string;
  Poster: string
}

export class MovieDetail {
    Title: string;
    Year: number;
    Rated: string;
    Released: Date;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: [
        {
            Source: string;
            Value: string;
        }
    ];
    Metascore: number;
    imdbRating: number;
    imdbVotes: number;
    imdbId: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: boolean;
}
