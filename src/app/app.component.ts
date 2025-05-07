import { Component, inject, OnInit } from '@angular/core';
import { Movie, MovieDetail } from './movie';
import { MovieService } from './movie.service';
import { MovieCardComponent } from './movie-card/movie-card.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [MovieCardComponent],
})
export class AppComponent implements OnInit {
  title = 'batman-app';
  movieList: Movie[] = [];
  movieDetailList: MovieDetail[] = [];
  sourceList= [];
  filterTerm = '';
  previouslyFiltered = false;
  #movieService= inject(MovieService);

  ngOnInit() {
    this.#movieService.getMovieList().subscribe(movies => {
      this.movieList = movies['Search'];
      if (this.movieList.length > 0) {
        this.movieList.forEach(movie => {
          this.#movieService.getMovieDetail(movie.imdbID).subscribe(movie => this.movieDetailList.push(movie));
        });
      }
    });
  }

  filterByDecade(decade: string){
    if (!this.previouslyFiltered ){
      this.sourceList = this.movieDetailList;
    }  
    this.previouslyFiltered =true;

    this.filterTerm = decade;

    switch(this.filterTerm){
      case('80s'):
        this.movieDetailList = this.sourceList.filter(movie=> new Date(movie.Released) < new Date('1990-01-01'));
        break;
        
      case('90s'):
        this.movieDetailList = this.sourceList.filter(movie=> new Date(movie.Released) >= new Date('1990-01-01') 
          && new Date(movie.Released) < new Date('2000-01-01'));
        break;

      case('00s'):
        this.movieDetailList = this.sourceList.filter(movie=> new Date(movie.Released) >= new Date('2000-01-01') 
          && new Date(movie.Released) < new Date('2010-01-01'));
          break;

      case('10s'):
        this.movieDetailList = this.sourceList.filter(movie=> new Date(movie.Released) >= new Date('2010-01-01')
          && new Date(movie.Released) < new Date('2020-01-01'));
        break;

      case('20s'):
        this.movieDetailList = this.sourceList.filter(movie=> new Date(movie.Released) >= new Date('2020-01-01'));
        break;

      default:
        this.movieDetailList = this.sourceList;
    }
  }

}


