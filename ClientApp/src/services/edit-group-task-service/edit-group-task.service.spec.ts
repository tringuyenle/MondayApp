import { TestBed } from '@angular/core/testing';

import { EditGroupTaskService } from './edit-group-task.service';

describe('EditGroupTaskService', () => {
  let service: EditGroupTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditGroupTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
