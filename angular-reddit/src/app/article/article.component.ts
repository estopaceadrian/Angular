import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() myArticle: Article;

  constructor() {}

  voteUp() {
    this.myArticle.voteUp();
    return false;
  }
  voteDown() {
    this.myArticle.voteDown();
    return false;
  }
  ngOnInit(): void {}
}
