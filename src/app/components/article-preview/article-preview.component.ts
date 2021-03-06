import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.css']
})
export class ArticlePreviewComponent implements OnInit {
  _article: any
  constructor() { }

  ngOnInit() {
  }
  @Input()
  set article(article: any) {
    this._article = article
  }
  
  openTab(link){
    window.open(link)
  }
}
