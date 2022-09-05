import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesInputComponent } from './features-input.component';

describe('FeaturesInputComponent', () => {
  let component: FeaturesInputComponent;
  let fixture: ComponentFixture<FeaturesInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturesInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturesInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
