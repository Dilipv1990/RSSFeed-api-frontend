import { BrowserModule } from '@angular/platform-browser'
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { ReactiveFormsModule } from '@angular/forms'
import { LocationStrategy, HashLocationStrategy } from '@angular/common'
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component'
import { LoginComponent } from './components/login/login.component'
import { LoginOverlayServiceService } from './services/login-overlay-service.service'
import { LoginOverlayRef } from './classes/login-overlay-ref'
import { NavComponent } from './components/nav/nav.component'
import { AppRoutingModule } from './app-routing.module'


import { OverlayModule, OverlayRef } from '@angular/cdk/overlay'

import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatSnackBarModule
} from '@angular/material';
import { ArticleComponent } from './components/article/article.component';
import { ArticlePreviewComponent } from './components/article-preview/article-preview.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { CodePanelComponent } from './components/code-panel/code-panel.component';
import { PicturePanelComponent } from './components/picture-panel/picture-panel.component';
import { ArticleSharePanelComponent } from './components/article-share-panel/article-share-panel.component';
import { LimitcharPipe } from './pipes/limitchar.pipe';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentsComponent } from './components/comments/comments.component';
import { ShareBarComponent } from './components/share-bar/share-bar.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuOverlayServiceService } from './services/menu-overlay-service.service';
import { FeedService } from './services/feed.service';
import { Http } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    ArticleComponent,
    ArticlePreviewComponent,
    ArticleListComponent,
    CodePanelComponent,
    PicturePanelComponent,
    ArticleSharePanelComponent,
    LimitcharPipe,
    DashboardComponent,
    CommentComponent,
    CommentsComponent,
    ShareBarComponent,
    MenuComponent
  ],
  entryComponents: [
    LoginComponent,
    MenuComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    HttpModule,

    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    OverlayModule
  ],
  providers: [LoginOverlayServiceService, [{ provide: LocationStrategy, useClass: HashLocationStrategy }],MenuOverlayServiceService, FeedService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
