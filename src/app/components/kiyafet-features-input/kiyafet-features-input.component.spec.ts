import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KiyafetFeaturesInputComponent } from './kiyafet-features-input.component';

describe('KiyafetFeaturesInputComponent', () => {
  let component: KiyafetFeaturesInputComponent;
  let fixture: ComponentFixture<KiyafetFeaturesInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KiyafetFeaturesInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KiyafetFeaturesInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
