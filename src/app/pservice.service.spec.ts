import { TestBed, inject } from '@angular/core/testing';

import { PserviceService } from './pservice.service';

describe('PserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PserviceService]
    });
  });

  it('should be created', inject([PserviceService], (service: PserviceService) => {
    expect(service).toBeTruthy();
  }));
});
