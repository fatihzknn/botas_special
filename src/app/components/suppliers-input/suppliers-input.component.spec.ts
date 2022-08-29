import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliersInputComponent } from './suppliers-input.component';

describe('SuppliersInputComponent', () => {
  let component: SuppliersInputComponent;
  let fixture: ComponentFixture<SuppliersInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuppliersInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuppliersInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
