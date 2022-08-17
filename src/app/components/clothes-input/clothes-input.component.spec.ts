import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothesInputComponent } from './clothes-input.component';

describe('ClothesInputComponent', () => {
  let component: ClothesInputComponent;
  let fixture: ComponentFixture<ClothesInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClothesInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClothesInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
