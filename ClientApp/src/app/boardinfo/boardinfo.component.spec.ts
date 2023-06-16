import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardinfoComponent } from './boardinfo.component';

describe('BoardinfoComponent', () => {
  let component: BoardinfoComponent;
  let fixture: ComponentFixture<BoardinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
