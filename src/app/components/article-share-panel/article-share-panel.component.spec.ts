import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleSharePanelComponent } from './article-share-panel.component';

describe('ArticleSharePanelComponent', () => {
  let component: ArticleSharePanelComponent;
  let fixture: ComponentFixture<ArticleSharePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleSharePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleSharePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
