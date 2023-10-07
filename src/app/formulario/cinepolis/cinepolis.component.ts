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
  volverAPagar: string = "no";

  procesarEntrada() {
    this.cantidadCompradores = parseInt(("Digite La Cantidad De compradores"));
    if (this.cantidadCompradores <= 0 || isNaN(this.cantidadCompradores)) {
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

    if (this.cantidadBoletos > 5) {
      valorPagar = (1 - 15 / 100) * this.cantidadBoletos * 12000;
    } else if (this.cantidadBoletos >= 3) {
      valorPagar = (1 - 10 / 100) * this.cantidadBoletos * 12000;
    } else {
      valorPagar = this.cantidadBoletos * 12000;
    }

    alert(`Nombre del Comprador: ${this.nombre}\nValor a Pagar: $${valorPagar.toFixed(2)}`);
  }

  salir() {
    this.cantidadCompradores = 0;
    this.nombre = "";
    this.tarjetaCineca = "";
    this.cantidadBoletos = 0;
    this.volverAPagar = "no";
  }
}