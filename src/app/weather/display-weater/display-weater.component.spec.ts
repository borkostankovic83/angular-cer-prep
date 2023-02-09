import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayWeaterComponent } from './display-weater.component';

describe('DisplayWeaterComponent', () => {
  let component: DisplayWeaterComponent;
  let fixture: ComponentFixture<DisplayWeaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayWeaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayWeaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
