import { Component, OnInit } from '@angular/core';
import { FeedService } from '../../services/feed.service';
import { Feed } from '../../model/feed';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [FeedService]
})
export class DashboardComponent implements OnInit {
  articles: Feed
  progress = true
  constructor(public feedService: FeedService, public snackbar: MatSnackBar) { }

  ngOnInit() {

    this.feedService.getFeed().subscribe((res) => {
      this.articles = this.feedService.getFeedData()
      this.progress = false
    }, (err) => {
      console.log("Could not fetch RSS feed", err)
      this.progress = false
    })
  }
  updateData(event) {
    console.log("update feed:", event)
    if (event === "updateFeed") {
      this.progress = false
      this.articles = this.feedService.getFeedData()
      this.snackbar.open('articles successfuly updated with the given RSS Feed!', null, {
        duration: 3000
      });
    }
    else if (event === "showProgress")
      this.progress = true
  }
}
