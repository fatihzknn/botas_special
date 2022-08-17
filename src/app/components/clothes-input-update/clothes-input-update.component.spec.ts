import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothesInputUpdateComponent } from './clothes-input-update.component';

describe('ClothesInputUpdateComponent', () => {
  let component: ClothesInputUpdateComponent;
  let fixture: ComponentFixture<ClothesInputUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClothesInputUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClothesInputUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
