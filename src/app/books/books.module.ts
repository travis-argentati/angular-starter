import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';

import { BooksRoutingModule } from './books-routing.module';

import { BookListComponent } from './book-list/book-list.component';
import { BookViewComponent } from './book-view/book-view.component';

@NgModule({
  declarations: [
    BookListComponent,
    BookViewComponent
  ],
  imports: [
    SharedModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
