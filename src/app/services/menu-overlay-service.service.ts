import { Injectable } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { MenuComponent } from '../components/menu/menu.component';
import { MenuOverlayRef } from '../classes/menu-overlay-ref';


interface MenuDialogConfig {
  panelClass?: string;
  hasBackdrop?: boolean;
  backdropClass?: string;
}

const DEFAULT_CONFIG: MenuDialogConfig = {
  hasBackdrop: true,
  backdropClass: 'dark-backdrop',
  panelClass: 'menu-dialog-panel'
}

@Injectable()
export class MenuOverlayServiceService {

  constructor(private overlay: Overlay) { }
  open(config: MenuDialogConfig = {}) {
    const dialogConfig = { ...DEFAULT_CONFIG, ...config }
    const overlayRef = this.createOverlay(dialogConfig)
    const dialogRef = new MenuOverlayRef(overlayRef)
    const menuPortal = new ComponentPortal(MenuComponent)

    //attach dialog to portal host
    overlayRef.attach(menuPortal)

    //closing dialog when backdrop is clicked
    overlayRef.backdropClick().subscribe(_ => dialogRef.close())
    return dialogRef
  }

  private getOverlayConfig(config: MenuDialogConfig): OverlayConfig {
    const positionStrategy = this.overlay.position()
      .global()
      .left()
      .centerVertically()

    const overlayConfig = new OverlayConfig({
      hasBackdrop: config.hasBackdrop,
      backdropClass: config.backdropClass,
      panelClass: config.panelClass,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy
    })
    return overlayConfig
  }

  private createOverlay(config: MenuDialogConfig) {
    const overlayConfig = this.getOverlayConfig(config)
    return this.overlay.create(overlayConfig)
  }
}
