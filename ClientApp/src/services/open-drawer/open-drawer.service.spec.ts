import { TestBed } from '@angular/core/testing';

import { OpenDrawerService } from './open-drawer.service';

describe('OpenDrawerService', () => {
  let service: OpenDrawerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenDrawerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
