import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import{MatInputModule} from '@angular/material/input';
import{MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { MultiplicacionComponent} from './formularios/multiplicacionaxb/multiplicacionaxb.component';
import { GradosComponent } from './formulario/grados/grados.component';
import { CinepolisComponent } from './formulario/cinepolis/cinepolis.component';

@NgModule({
  declarations: [
    AppComponent,
    MultiplicacionComponent,
    GradosComponent,
    CinepolisComponent,



  ],
  imports: [
    BrowserModule,
    FormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

