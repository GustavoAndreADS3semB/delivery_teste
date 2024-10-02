import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TelaInicioComponent } from "./tela-inicio/tela-inicio.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TelaInicioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Delivery';
}
