import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  #apiUrl = 'http://www.omdbapi.com/';
  #apiKey = '&apikey=5a488304';

  constructor( private http: HttpClient) { }


  getMovieList(): Observable<any> {
    return this.http.get<any>(`${this.#apiUrl}?s=Batman${this.#apiKey}`);
  }

  getMovieDetail(imdbId: string): Observable<any> {
    return this.http.get<any>(`${this.#apiUrl}?i=${imdbId}${this.#apiKey}`);
  }
}
