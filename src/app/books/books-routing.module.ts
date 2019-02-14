import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookViewComponent } from './book-view/book-view.component';
import { BookListComponent } from './book-list/book-list.component';

const routes: Routes = [
  { path: ':bookid', component: BookViewComponent },
  { path: '', component: BookListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
