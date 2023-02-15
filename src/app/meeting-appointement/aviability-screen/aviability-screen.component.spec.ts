import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AviabilityScreenComponent } from './aviability-screen.component';

describe('AviabilityScreenComponent', () => {
  let component: AviabilityScreenComponent;
  let fixture: ComponentFixture<AviabilityScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AviabilityScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AviabilityScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
