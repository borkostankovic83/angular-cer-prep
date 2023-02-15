import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AviabilityComponent } from './aviability.component';

describe('AviabilityComponent', () => {
  let component: AviabilityComponent;
  let fixture: ComponentFixture<AviabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AviabilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AviabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
