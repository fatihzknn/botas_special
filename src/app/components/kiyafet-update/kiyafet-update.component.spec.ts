import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KiyafetUpdateComponent } from './kiyafet-update.component';

describe('KiyafetUpdateComponent', () => {
  let component: KiyafetUpdateComponent;
  let fixture: ComponentFixture<KiyafetUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KiyafetUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KiyafetUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
