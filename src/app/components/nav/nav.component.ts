import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { LoginOverlayServiceService } from '../../services/login-overlay-service.service';
import { LoginOverlayRef } from '../../classes/login-overlay-ref';
import { MenuOverlayRef } from '../../classes/menu-overlay-ref';
import { MenuOverlayServiceService } from '../../services/menu-overlay-service.service';
import { FeedService } from '../../services/feed.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Output() shareData = new EventEmitter()
  loginOverlayRef: LoginOverlayRef
  menuOverlayRef: MenuOverlayRef
  constructor(private loginOverlayService: LoginOverlayServiceService, private menuOverlayService: MenuOverlayServiceService, private feedService: FeedService, private snackbar: MatSnackBar) { }

  ngOnInit() {
  }
  openLogin() {
    // if(this.loginOverlayRef)
    this.loginOverlayRef = this.loginOverlayService.open()

    //remove popup after inactivity of 5 mins
    // setTimeout(() => this.loginOverlayRef.close(), 10000)
  }
  openMenu() {
    this.menuOverlayRef = this.menuOverlayService.open()
  }
  getFeed(url) {
    this.shareData.emit("showProgress")
    if (!url) {
      this.snackbar.open('Please enter a valid RSS url', null, {
        duration: 3000
      });
      return
    }
    this.feedService.getFeed(url).subscribe((res) => {
      this.shareData.emit("updateFeed")
    }, (err)=>{
      this.snackbar.open('Could not fetch data. Please make sure to enter a valid RSS url', null, {
        duration: 3000
      });
    })
  }
}
