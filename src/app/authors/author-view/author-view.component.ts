import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';

import { AuthorService, Author } from '../author.service';
import { GenericBrowserDomAdapter } from '@angular/platform-browser/src/browser/generic_browser_adapter';
import { Book } from 'src/app/books/book.service';

@Component({
  selector: 'app-author-view',
  templateUrl: './author-view.component.html',
  styleUrls: ['./author-view.component.css']
})
export class AuthorViewComponent implements OnInit, OnDestroy {
  author: Author;
  books: Book[];
  private authorId: number;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute, private authorService: AuthorService) { }

  ngOnInit() {
    this.subscription = this.route.paramMap.subscribe(
      (map: ParamMap) => {
        this.authorId = parseInt(map.get('authorid'), 10);
        this.authorService.getById(this.authorId).subscribe(
          (authorData: Author[]) => {
            this.author = authorData[0];
            this.getBooks(this.authorId);
          }
        );
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private getBooks(authorId: number): void {
    this.authorService.getBooks(this.authorId).subscribe(
      (bookData: Book[]) => this.books = bookData.sort((a, b) => (a.PublicationDate - b.PublicationDate))
    );
  }
}
