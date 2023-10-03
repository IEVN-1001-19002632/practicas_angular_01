import { Component } from '@angular/core';

@Component({
  selector: 'app-grados',
  templateUrl: './grados.component.html',
  styleUrls: ['./grados.component.css']
})
export class GradosComponent {
  valor:string='';
  resultado:string='';

  celsiusToFahrenheit() {
    const celsius = this.valor;
    const fahrenheit = (parseInt(celsius) * 9/5) + 32;
    this.resultado = `${celsius} grados Celsius son ${fahrenheit} grados Fahrenheit.`;
  }

  fahrenheitToCelsius() {
    const fahrenheit = this.valor;
    const celsius = (parseInt(fahrenheit) - 32) * 5/9;
    this.resultado = `${fahrenheit} grados Fahrenheit son ${celsius} grados Celsius.`;
  }
}


