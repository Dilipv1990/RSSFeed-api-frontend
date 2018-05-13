import { Injectable } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { LoginComponent } from '../components/login/login.component';
import { LoginOverlayRef } from '../classes/login-overlay-ref';


interface LoginDialogConfig {
  panelClass?: string;
  hasBackdrop?: boolean;
  backdropClass?: string;
}

const DEFAULT_CONFIG: LoginDialogConfig = {
  hasBackdrop: true,
  backdropClass: 'dark-backdrop',
  panelClass: 'login-dialog-panel'
}

@Injectable()
export class LoginOverlayServiceService {

  constructor(private overlay: Overlay) { }
  open(config: LoginDialogConfig = {}) {
    const dialogConfig = { ...DEFAULT_CONFIG, ...config }
    const overlayRef = this.createOverlay(dialogConfig)
    const dialogRef = new LoginOverlayRef(overlayRef)
    const loginPortal = new ComponentPortal(LoginComponent)
    
    //attach dialog to portal host
    overlayRef.attach(loginPortal)
    
    //closing dialog when backdrop is clicked
    overlayRef.backdropClick().subscribe(_=>dialogRef.close())
    return dialogRef
  }

  private getOverlayConfig(config: LoginDialogConfig): OverlayConfig {
    const positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
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

  private createOverlay(config: LoginDialogConfig) {
    const overlayConfig = this.getOverlayConfig(config)
    return this.overlay.create(overlayConfig)
  }
}
