import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KiyafetInputComponent } from './kiyafet-input.component';

describe('KiyafetInputComponent', () => {
  let component: KiyafetInputComponent;
  let fixture: ComponentFixture<KiyafetInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KiyafetInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KiyafetInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
