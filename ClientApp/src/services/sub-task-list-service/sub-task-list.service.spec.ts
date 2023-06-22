import { TestBed } from '@angular/core/testing';

import { SubTaskListService } from './sub-task-list.service';

describe('SubTaskListService', () => {
  let service: SubTaskListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubTaskListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
