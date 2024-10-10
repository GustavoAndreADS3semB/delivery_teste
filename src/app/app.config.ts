import { ApplicationConfig} from '@angular/core';
import { provideRouter, Routes} from '@angular/router';
import { TelaInicioComponent } from './tela-inicio/tela-inicio.component';
import { MenuComponent } from './menu/menu.component';
import { PedidoComponent } from './pedido/pedido.component';
import { AcompanharPedidoComponent } from './acompanhar-pedido/acompanhar-pedido.component';


const routes: Routes = [
      { path: '', component: TelaInicioComponent },
      { path: 'menu', component: MenuComponent },
      { path: 'pedido', component: PedidoComponent },
      { path: 'acompanhar-pedido', component: AcompanharPedidoComponent },
      { path: '**', redirectTo: '/menu', pathMatch: 'full' },
    ];

  export const appConfig: ApplicationConfig = {
    providers: [
      provideRouter(routes)
    ]
};
