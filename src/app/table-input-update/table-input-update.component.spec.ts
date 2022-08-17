import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableInputUpdateComponent } from './table-input-update.component';

describe('TableInputUpdateComponent', () => {
  let component: TableInputUpdateComponent;
  let fixture: ComponentFixture<TableInputUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableInputUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableInputUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
