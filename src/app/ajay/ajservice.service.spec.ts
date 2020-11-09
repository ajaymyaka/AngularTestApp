import { TestBed } from '@angular/core/testing';

import { AjserviceService } from './ajservice.service';

describe('AjserviceService', () => {
  let service: AjserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
