import { Component, OnInit } from '@angular/core';
import { MenuOverlayRef } from '../../classes/menu-overlay-ref';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuOverlayRef: MenuOverlayRef
  constructor() { }

  ngOnInit() {
  }
  closeMenu() {
    this.menuOverlayRef.close()
  }
}
