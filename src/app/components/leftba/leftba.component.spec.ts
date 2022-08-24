import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftbaComponent } from './leftba.component';

describe('LeftbaComponent', () => {
  let component: LeftbaComponent;
  let fixture: ComponentFixture<LeftbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftbaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
