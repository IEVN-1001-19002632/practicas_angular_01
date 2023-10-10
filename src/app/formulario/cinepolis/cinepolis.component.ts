import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {
  cantidadCompradores: number = 0;
  nombre: string = "";
  tarjetaCineca: string = "";
  cantidadBoletos: number = 0;
  valorAPagar: number = 0;
  si: string="";
  no:string="";


  Compra(){
    
  }

  procesarEntrada() {
    this.cantidadCompradores = parseInt(("Digite La Cantidad De compradores"));
    if (this.cantidadCompradores <= 1|| isNaN(this.cantidadCompradores)) {
      alert("La cantidad de compradores debe ser un número mayor que cero.");
      return;
    }

    for (let i = 0; i < this.cantidadCompradores; i++) {
      this.nombre = ("Digite Nombre Del Comprador");
      this.cantidadBoletos = parseFloat(("Digite Cantidad De Boletas Que Desee Comprar"));
      this.calcularValorPagar();
    }
  }

  calcularValorPagar() {
    let valorPagar = 0;
    if((this.cantidadBoletos/this.cantidadCompradores)>7){
      alert("La cantidad de boletos no debe ser mayor a 7 por comprador");
        }

      else {
        if (this.cantidadBoletos > 5) {
      valorPagar = (.85) * this.cantidadBoletos * 12;
    }
    if (this.cantidadBoletos >2 && this.cantidadBoletos<6) {
      valorPagar = (.90) * this.cantidadBoletos * 12;
    }
    if (this.cantidadBoletos == 1 || this.cantidadBoletos == 2){
      valorPagar = this.cantidadBoletos * 12;
    }
    if (this.si){
      valorPagar = valorPagar * .90
    }
    if (this.no){
      valorPagar = valorPagar
    }
    
    }
    alert(`Nombre del Comprador: ${this.nombre}\nValor a Pagar: $${valorPagar.toFixed(2)}`);
    
      }

    
   
  

  salir() {
    this.cantidadCompradores = 0;
    this.nombre = "";
    this.tarjetaCineca = "";
    this.cantidadBoletos = 0;
    this.valorAPagar = 0;
  }
}