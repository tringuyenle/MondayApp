import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KqTestComponent } from './kq-test.component';

describe('KqTestComponent', () => {
  let component: KqTestComponent;
  let fixture: ComponentFixture<KqTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KqTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KqTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
