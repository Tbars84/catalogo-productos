import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PRIMENG COMPONENTS
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {MenubarModule} from 'primeng/menubar';
import {FieldsetModule} from 'primeng/fieldset';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import {TableModule} from 'primeng/table';

@NgModule({
  imports : [
    CommonModule,
    CardModule,
    ButtonModule,
    OverlayPanelModule,
    MenubarModule,
    FieldsetModule,
    CalendarModule,
    DropdownModule,
    TableModule
  ],
  exports: [
    CommonModule,
    CardModule,
    ButtonModule,
    OverlayPanelModule,
    MenubarModule,
    FieldsetModule,
    CalendarModule,
    DropdownModule,
    TableModule
  ],
})

export class PrimeNgModule{}
