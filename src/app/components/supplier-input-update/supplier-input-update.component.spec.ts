import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierInputUpdateComponent } from './supplier-input-update.component';

describe('SupplierInputUpdateComponent', () => {
  let component: SupplierInputUpdateComponent;
  let fixture: ComponentFixture<SupplierInputUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierInputUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierInputUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
