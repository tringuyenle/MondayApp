import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsegroupComponent } from './collapsegroup.component';

describe('CollapsegroupComponent', () => {
  let component: CollapsegroupComponent;
  let fixture: ComponentFixture<CollapsegroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollapsegroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollapsegroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
