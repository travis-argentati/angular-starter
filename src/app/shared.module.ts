import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorNamePipe } from './author-name.pipe';

@NgModule({
  declarations: [
    AuthorNamePipe
  ],
  exports: [
    CommonModule,
    AuthorNamePipe
  ]
})
export class SharedModule { }
