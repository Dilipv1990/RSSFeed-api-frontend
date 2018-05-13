import { OverlayRef } from "@angular/cdk/overlay"

export class LoginOverlayRef {
	constructor(private overlayRef: OverlayRef) {
	}
	close(): void {
		this.overlayRef.dispose()
	}
}
