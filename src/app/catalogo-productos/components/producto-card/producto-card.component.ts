import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OverlayPanel } from 'primeng/overlaypanel';
import {trigger,state,style,transition,animate,AnimationEvent} from '@angular/animations';

@Component({
  selector: 'producto-card',
  templateUrl: './producto-card.component.html',
  styleUrls: ['./producto-card.component.scss'],
  animations: [
        trigger('animation', [
            state('visible', style({
                transform: 'translateY(0)',
                opacity: 1
            })),
            transition('void => *', [
                style({transform: 'translateY(5%)', opacity: 0}),
                animate('300ms ease-out')
            ]),
            transition('* => void', [
                animate(('250ms ease-in'), style({
                    height: 0,
                    opacity: 0,
                    transform: 'translateY(5%)'
                }))
            ])
        ])
    ],  
})
export class ProductoCardComponent implements OnInit {
  @Input() productos;
  @Output() seleccionProd = new EventEmitter<number>();
  imagenSeleccionada: string;
  public deshabilitaAgregar: boolean = false;
  constructor() { }

  ngOnInit() {}
  public ampliaImagen(event, prod, overlaypanel: OverlayPanel){
    this.imagenSeleccionada = prod.imagen;
    overlaypanel.toggle(event);
  }
  public agregaProd(prodId){
    this.deshabilitaAgregar = true;
    this.seleccionProd.emit(prodId)
    setTimeout(() => {
      this.deshabilitaAgregar = false;
    }, 800);
  }
}
