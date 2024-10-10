import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-menu',
  standalone: true, // Marque como standalone
  imports: [CommonModule], // Importa CommonModule para usar ngIf
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  selectedTab: string = 'hamburguer'; // Aba padrão
  carrinho: string[] = []; // Lista de produtos no carrinho

  constructor(private router: Router, private location: Location) {}

  adicionarProduto(produto: string) {
    this.carrinho.push(produto); // Adiciona o produto ao carrinho
    console.log(`${produto} adicionado ao carrinho.`);
  }

  // Método para contar o número de produtos no carrinho
  getQuantidadeCarrinho(): number {
    return this.carrinho.length;
  }

  irParaPedido() {
    this.router.navigate(['/pedido']); // Navega para a tela de pedido
  }

  voltarPaginaAnterior() {
    this.location.back(); // Utiliza o Location para voltar no histórico
  }
}




