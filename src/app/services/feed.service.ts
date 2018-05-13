import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { Feed } from '../model/feed';
import { map, filter, scan, catchError } from 'rxjs/operators';

@Injectable()
export class FeedService {

  public feedUrl = "/api/feed"
  public feed: Feed

  constructor(private http: Http) { }
  getFeed(url?): Observable<any> {
    console.log("url entered:", url)
    return this.http.get(this.feedUrl + (url ? "?feedUrl=" + url : "")).pipe(map((res: Response) => {
      console.log("res:", res["_body"])
      this.feed = JSON.parse(res["_body"])["successResult"][0].items
      return this.feed
    }))

  }

  getFeedData() {
    return this.feed
  }
}
