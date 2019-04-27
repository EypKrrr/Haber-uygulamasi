import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import {News} from './news';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private newsUrl = 'http://localhost:4000/news';  // URL to web api

  constructor(private http: HttpClient) { }

  /** GET heroes from the server */
  getAllNews(): Observable<News[]> {
    console.log('tüm haber içeriği');
    return this.http.get<News[]>(this.newsUrl).pipe(
        tap(_ => console.log('fetched news')),
        catchError(this.handleError<News[]>('getAllNews', []))
      );
  }

  getNewsById(id: number): Observable<News[]> {
    const url = `${this.newsUrl}/${id}`;
    console.log(url);
    return this.http.get<News[]>(url).pipe(
      tap(_ => console.log(`fetched news id=${id}`)),
      catchError(this.handleError<News[]>(`getNewsById id=${id}`))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
