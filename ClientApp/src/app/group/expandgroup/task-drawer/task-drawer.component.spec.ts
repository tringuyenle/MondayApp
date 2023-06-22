import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDrawerComponent } from './task-drawer.component';

describe('TaskDrawerComponent', () => {
  let component: TaskDrawerComponent;
  let fixture: ComponentFixture<TaskDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskDrawerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
