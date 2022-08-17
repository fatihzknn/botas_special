import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothesTableComponent } from './clothes-table.component';

describe('ClothesTableComponent', () => {
  let component: ClothesTableComponent;
  let fixture: ComponentFixture<ClothesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClothesTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClothesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
