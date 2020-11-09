import { TestBed } from '@angular/core/testing';

import { AjayserviceService } from './ajayservice.service';

describe('AjayserviceService', () => {
  let service: AjayserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjayserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
