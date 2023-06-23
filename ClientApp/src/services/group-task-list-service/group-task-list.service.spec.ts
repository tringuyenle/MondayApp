import { TestBed } from '@angular/core/testing';

import { GroupTaskListService } from './group-task-list.service';

describe('GroupTaskListService', () => {
  let service: GroupTaskListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupTaskListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
