import { Component, OnInit, Input } from '@angular/core';
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
  imagenSeleccionada: string;
  constructor() { }

  ngOnInit() {
    console.log(this.productos);
  }
  public ampliaImagen(event, prod, overlaypanel: OverlayPanel){
    this.imagenSeleccionada = prod.imagen;
    overlaypanel.toggle(event);
  }
}
