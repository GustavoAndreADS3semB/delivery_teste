import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
constructor(private router: Router){}

  onEnterClick() {
    console.log('Botão Entrar clicado');
    this.router.navigate(['/menu']);  // Altere para a rota do MenuComponent
  }
}
