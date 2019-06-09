import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SelectItem } from 'primeng/api';
import {MessageService} from 'primeng/api';
import { FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.scss']
})
export class FormularioUsuarioComponent implements OnInit {
  @Output() informacionPedidoUsuario = new EventEmitter();
  public ciudades: SelectItem[] = [
    { label: 'Medellin', value: 'Medellin', disabled: false },
    { label: 'Bogota', value: 'Bogota', disabled: false },
    { label: 'Cali', value: 'Cali', disabled: false },
    { label: 'Bucaramanga', value: 'Bucaramanga', disabled: false },
    { label: 'Cartagena', value: 'Cartagena', disabled: false },
    { label: 'Pasto', value: 'Pasto', disabled: false },
    { label: 'Pereira', value: 'Pereira', disabled: false }
  ];
  public informacionUsuario = this._fb.group({
      nombre: ['' , Validators.required] ,
      fecha: ['' , Validators.required],
      direccion: ['' , Validators.required],
      ciudad: ['' , Validators.required]
  })
  constructor(
    private _fb: FormBuilder,
    private messageService: MessageService
  ) { }
  ngOnInit() {}
  public envioPedido() {
    if (this.informacionUsuario.dirty && this.informacionUsuario.valid) {
      this.informacionPedidoUsuario.emit(this.informacionUsuario.value);
      this.informacionUsuario.reset();
    } else {
      this.messageService.add({severity:'error', summary:'Error en el Formulario', detail:'Debes completar todos los campos del formulario'});
    }
  }
}
