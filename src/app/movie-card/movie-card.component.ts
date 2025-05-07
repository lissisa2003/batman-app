import { Component, input } from "@angular/core";
import { MovieDetail } from '../movie';


@Component({
    selector: 'movie-card',
    templateUrl: './movie-card.html',
    styleUrls: ['./movie-card.scss'],
})
  export class MovieCardComponent {
    movie = input<MovieDetail>();

  }
