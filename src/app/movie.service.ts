import { Injectable } from '@angular/core';
import { Movie, MovieDetail } from './movie';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'http://www.omdbapi.com/';
  private apiKey = '&apikey=5a488304';

  constructor( private http: HttpClient) { }


  getMovieList(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?s=Batman${this.apiKey}`);
  }

  getMovieDetail(imdbId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?i=${imdbId}${this.apiKey}`);
  }
}
