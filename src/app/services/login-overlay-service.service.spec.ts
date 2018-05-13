import { TestBed, inject } from '@angular/core/testing';

import { LoginOverlayServiceService } from './login-overlay-service.service';

describe('LoginOverlayServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginOverlayServiceService]
    });
  });

  it('should be created', inject([LoginOverlayServiceService], (service: LoginOverlayServiceService) => {
    expect(service).toBeTruthy();
  }));
});
