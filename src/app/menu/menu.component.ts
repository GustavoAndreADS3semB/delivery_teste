import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  constructor(private router: Router) {}

  onButtonClick(role: string){
    console.log(`${role} button clicked`);
    if (role === 'Gestor') {
      this.router.navigate(['/gestao']);
    }else if (role ==='Cliente'){
      this.router.navigate(['/cardapio'])
    } else {
      // Lógica para outros botões
    }
  }
}
