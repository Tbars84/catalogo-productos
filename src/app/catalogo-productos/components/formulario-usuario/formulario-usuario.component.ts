import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.scss']
})
export class FormularioUsuarioComponent implements OnInit {
  public ciudades: SelectItem[] = [
    { label: 'Medellin', value: 'Medellin', disabled: false },
    { label: 'Bogota', value: 'Bogota', disabled: false },
    { label: 'Cali', value: 'Cali', disabled: false },
    { label: 'Bucaramanga', value: 'Bucaramanga', disabled: false }
  ];
  constructor() { }

  ngOnInit() {
  }

}
