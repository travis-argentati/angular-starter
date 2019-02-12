import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';

import { AuthorService, Author } from '../author.service';
import { GenericBrowserDomAdapter } from '@angular/platform-browser/src/browser/generic_browser_adapter';

@Component({
  selector: 'app-author-view',
  templateUrl: './author-view.component.html',
  styleUrls: ['./author-view.component.css']
})
export class AuthorViewComponent implements OnInit, OnDestroy {
  author: Author;
  private authorId: number;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute, private authorService: AuthorService) { }

  ngOnInit() {
    this.subscription = this.route.paramMap.subscribe(
      (map: ParamMap) => {
        this.authorId = parseInt(map.get('authorid'), 10);
        this.authorService.getById(this.authorId).subscribe(
          (authorData: Author[]) => this.author = authorData[0]
        );
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
