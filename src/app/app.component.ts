import { Component, OnInit } from '@angular/core';
import { Movie, MovieDetail } from './movie';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'batman-app';
  movieList: Movie[] = [];
  movieDetailList: MovieDetail[] = [];

  constructor(private movieService: MovieService){

  }

  ngOnInit() {
    this.movieService.getMovieList().subscribe(movies => {
      this.movieList = movies['Search'];
      if (this.movieList.length > 0) {
        this.movieList.forEach(movie => {
          this.movieService.getMovieDetail(movie.imdbID).subscribe(movie => this.movieDetailList.push(movie));
        })
      }
    });



  }
}


