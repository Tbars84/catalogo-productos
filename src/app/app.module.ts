import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CatProdsModule } from './catalogo-productos/catalogo-productos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CatProdsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
