import { TestBed } from '@angular/core/testing';

import { NaviServiceService } from './navi-service.service';

describe('NaviServiceService', () => {
  let service: NaviServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NaviServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
