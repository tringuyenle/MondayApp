import { TestBed } from '@angular/core/testing';

import { AddGroupTaskService } from './add-group-task.service';

describe('AddGroupTaskService', () => {
  let service: AddGroupTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddGroupTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
