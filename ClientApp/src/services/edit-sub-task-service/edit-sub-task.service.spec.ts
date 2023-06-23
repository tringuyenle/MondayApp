import { TestBed } from '@angular/core/testing';

import { EditSubTaskService } from './edit-sub-task.service';

describe('EditSubTaskService', () => {
  let service: EditSubTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditSubTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
