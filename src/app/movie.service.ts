import { Injectable } from '@angular/core';
import { Movie, MovieDetail } from './movie';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'http://www.omdbapi.com/&apikey=5a488304'

  constructor( private http: HttpClient) { }


  getMovieList(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl + '?s=Batman');
  }

  getMovieDetail(imdbId: string): Observable<MovieDetail> {
    return this.http.get<MovieDetail>(this.apiUrl + '?i=' + imdbId);
  }
}
