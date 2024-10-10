import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-acompanhar-pedido',
  standalone: true,
  imports: [],
  templateUrl: './acompanhar-pedido.component.html',
  styleUrl: './acompanhar-pedido.component.css'
})
export class AcompanharPedidoComponent {

  constructor(private location: Location) {} // Injete o Location no construtor

  voltarPaginaAnterior() {
    this.location.back(); // Método que volta à página anterior
  }

}
