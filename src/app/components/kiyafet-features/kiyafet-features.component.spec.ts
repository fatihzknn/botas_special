import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KiyafetFeaturesComponent } from './kiyafet-features.component';

describe('KiyafetFeaturesComponent', () => {
  let component: KiyafetFeaturesComponent;
  let fixture: ComponentFixture<KiyafetFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KiyafetFeaturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KiyafetFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
