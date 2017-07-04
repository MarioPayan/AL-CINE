import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from 'rxjs';

@Injectable()
export class TmdbService {

  private urlBase = "https://alrestcine-mariopayan.c9users.io/";

  constructor(private http: Http) { }

  get(search: string, extra_puts=""): Observable<any> {
  return this.http.get(`${this.urlBase}${search}/?format=json`)
    .map(response => {
      return response.json();
    });
  }
  
  getDetailPerson(id: string): Observable<any> {
    return this.get(`profile/${id}`);
  }

  getImagesPerson(id: string): Observable<any> {
    return this.get(`profile-images/${id}`);
  }

  getDetailMovie(id: string): Observable<any> {
    return this.get(`movie/${id}`);
  }

  getPopularMovies(): Observable<any> {
    return this.get("movies/1");
  }

  getTopMovies(): Observable<any> {
    return this.get("movies/2");
  }
  
  getUpcomingMovies(): Observable<any> {
    return this.get("movies/3");
  }
  
  getNowplayingMovies(): Observable<any> {
    return this.get("movies/4");
  }

  getPopularPeople(): Observable<any> {
    return this.get("people-important/1");
  }
  
  getMovieCreditsPerson(id: string): Observable<any> {
    return this.get(`movie-credits/${id}`);
  }

  getCastPeople(id): Observable<any> {
    return this.get(`movie-cast/${id}`);
  }

  getSimilarMovies(id): Observable<any> {
    return this.get(`movie-similar/${id}`);
  }
  
  getSerch(url: string): Observable<any> {
    return this.http.get(url)
    .map(response => {
      return response.json();
    });
  }

  getSearchPerson(query: string): Observable<any> {
    return this.getSerch('https://api.themoviedb.org/3/search/person?api_key=518d83af872f927b98cfe36a90cd05b0&language=en-US&query=${query}&page=1&include_adult=false');
  }

  getVideoMovie(id: string): Observable<any> {
    return this.get(`video/${id}`);
  }
}
