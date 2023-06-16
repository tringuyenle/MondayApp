import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandgroupComponent } from './expandgroup.component';

describe('ExpandgroupComponent', () => {
  let component: ExpandgroupComponent;
  let fixture: ComponentFixture<ExpandgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpandgroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpandgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
