import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KiyafetTableComponent } from './kiyafet-table.component';

describe('KiyafetTableComponent', () => {
  let component: KiyafetTableComponent;
  let fixture: ComponentFixture<KiyafetTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KiyafetTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KiyafetTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
