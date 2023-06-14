import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardcontentComponent } from './boardcontent.component';

describe('BoardcontentComponent', () => {
  let component: BoardcontentComponent;
  let fixture: ComponentFixture<BoardcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardcontentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
