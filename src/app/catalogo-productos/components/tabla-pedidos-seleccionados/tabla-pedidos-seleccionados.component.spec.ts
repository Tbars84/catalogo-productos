import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPedidosSeleccionadosComponent } from './tabla-pedidos-seleccionados.component';

describe('TablaPedidosSeleccionadosComponent', () => {
  let component: TablaPedidosSeleccionadosComponent;
  let fixture: ComponentFixture<TablaPedidosSeleccionadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaPedidosSeleccionadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaPedidosSeleccionadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
