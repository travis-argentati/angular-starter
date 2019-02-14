import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
const server = environment.server;

export interface Book {
  Id: number;
  AuthorId: number;
  Title: string;
  LiteraryType: string;
  PublicationDate: number;
}

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(server + '/books');
  }

  getById(bookId: number): Observable<Book[]> {
    return this.http.get<Book[]>(server + '/books/' + bookId);
  }
}
