import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  _articles
  constructor() { }

  @Input()
  set articles(articles: any){
    this._articles = articles
  }
  
  ngOnInit() {
  }

}
