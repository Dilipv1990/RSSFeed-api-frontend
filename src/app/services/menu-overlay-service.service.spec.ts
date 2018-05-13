import { TestBed, inject } from '@angular/core/testing';

import { MenuOverlayServiceService } from './menu-overlay-service.service';

describe('MenuOverlayServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MenuOverlayServiceService]
    });
  });

  it('should be created', inject([MenuOverlayServiceService], (service: MenuOverlayServiceService) => {
    expect(service).toBeTruthy();
  }));
});
