import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatuslabelComponent } from './statuslabel.component';

describe('StatuslabelComponent', () => {
  let component: StatuslabelComponent;
  let fixture: ComponentFixture<StatuslabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatuslabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatuslabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
