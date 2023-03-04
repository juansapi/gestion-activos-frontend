import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarMovimientosComponent } from './registrar-movimientos.component';

describe('RegistrarMovimientosComponent', () => {
  let component: RegistrarMovimientosComponent;
  let fixture: ComponentFixture<RegistrarMovimientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarMovimientosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarMovimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
