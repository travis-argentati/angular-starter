import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription, Observable, of } from 'rxjs';

import { BookService, Book } from '../book.service';
import { AuthorService, Author } from 'src/app/authors/author.service';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit, OnDestroy {
  book: Book;
  author: Author;
  private bookId: number;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute, private bookService: BookService, private authorService: AuthorService) { }

  ngOnInit() {
    this.subscription = this.route.paramMap.subscribe(
      (map: ParamMap) => {
        this.bookId = parseInt(map.get('bookid'), 10);
        this.bookService.getById(this.bookId).subscribe(
          (bookData: Book[]) => {
            this.book = bookData[0];
            this.getAuthor(this.book.AuthorId);
          }
        );
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private getAuthor(authorId: number): void {
    this.authorService.getById(authorId).subscribe(
      (authorData: Author[]) => this.author = authorData[0]
    );
  }
}
