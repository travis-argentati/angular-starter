import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
const server = environment.server;

export interface Author {
  Id: number;
  FirstName: string;
  MiddleName: string;
  LastName: string;
  Genres: string[];
}

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Author[]> {
    return this.http.get<Author[]>(server + '/authors');
  }

  getById(authorId: number): Observable<Author[]> {
    return this.http.get<Author[]>(server + '/authors/' + authorId);
  }
}
