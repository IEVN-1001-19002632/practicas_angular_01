import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicacionaxb',
  templateUrl: './multiplicacionaxb.component.html',
  styleUrls: ['./multiplicacionaxb.component.css']
})
export class MultiplicacionComponent {
  numero1=0;
  numero2=0;
  resultado:number=0;

  multiplicar() {
    this.resultado = this.sumarMultiplicacion (this.numero1, this.numero2);
  }

  sumarMultiplicacion(a: number, b: number): number {
    let resultado = 0;
    for (let i = 0; i < b; i++) {
      resultado += a;
    }
    return resultado;
  }
}