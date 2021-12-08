import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Contadormodule } from './contador/contador.module';

import { Heroesmodule } from './heroes/heroes.module';


@NgModule({
  declarations: [
    AppComponent,
   
   
  ],
  imports: [
    BrowserModule,
    Heroesmodule,
    Contadormodule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
