import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';

import { AuthorsRoutingModule } from './authors-routing.module';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorViewComponent } from './author-view/author-view.component';

@NgModule({
  declarations: [
    AuthorListComponent,
    AuthorViewComponent
  ],
  imports: [
    SharedModule,
    AuthorsRoutingModule
  ]
})
export class AuthorsModule { }
