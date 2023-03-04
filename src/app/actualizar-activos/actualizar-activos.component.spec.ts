import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarActivosComponent } from './actualizar-activos.component';

describe('ActualizarActivosComponent', () => {
  let component: ActualizarActivosComponent;
  let fixture: ComponentFixture<ActualizarActivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarActivosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarActivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
