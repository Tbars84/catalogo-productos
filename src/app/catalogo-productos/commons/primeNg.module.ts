import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// PRIMENG COMPONENTS
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {MenubarModule} from 'primeng/menubar';
import {FieldsetModule} from 'primeng/fieldset';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    OverlayPanelModule,
    MenubarModule,
    FieldsetModule,
    CalendarModule,
    DropdownModule,
    TableModule,
    ToastModule
  ],
  exports: [
    BrowserAnimationsModule,
    CommonModule,
    CardModule,
    ButtonModule,
    OverlayPanelModule,
    MenubarModule,
    FieldsetModule,
    CalendarModule,
    DropdownModule,
    TableModule,
    ToastModule
  ],
})

export class PrimeNgModule{}
