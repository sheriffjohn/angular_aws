import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekdayDisplayComponent } from './weekday-display.component';

describe('WeekdayDisplayComponent', () => {
  let component: WeekdayDisplayComponent;
  let fixture: ComponentFixture<WeekdayDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekdayDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekdayDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
