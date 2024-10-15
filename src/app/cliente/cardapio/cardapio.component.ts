import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cardapio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent {
  selectedTab: string = 'hamburguer';
  carrinho: string[] = [];

  constructor(private router: Router, private location: Location) {}

  adicionarProduto(produto: string) {
    this.carrinho.push(produto);
    console.log(`${produto} adicionado ao carrinho.`);
  }


  getQuantidadeCarrinho(): number {
    return this.carrinho.length;
  }

  irParaPedido() {
    this.router.navigate(['/pedido']);
  }

  voltarPaginaAnterior() {
    this.location.back();
  }
}




