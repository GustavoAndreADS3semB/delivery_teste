import { ApplicationConfig} from '@angular/core';
import { provideRouter, Routes} from '@angular/router';
import { TelaInicioComponent } from './cliente/tela-inicio/tela-inicio.component';
import { MenuComponent } from './cliente/menu/menu.component';
import { PedidoComponent } from './cliente/pedido/pedido.component';
import { AcompanharPedidoComponent } from './cliente/acompanhar-pedido/acompanhar-pedido.component';
import { FinalizacaoComponent } from './cliente/finalizacao/finalizacao.component';

const routes: Routes = [
      { path: '', component: TelaInicioComponent },
      { path: 'menu', component: MenuComponent },
      { path: 'pedido', component: PedidoComponent },
      { path: 'acompanhar-pedido', component: AcompanharPedidoComponent },
      { path: 'finalizacao', component: FinalizacaoComponent },
      { path: '**', redirectTo: '/menu', pathMatch: 'full' },
    ];

  export const appConfig: ApplicationConfig = {
    providers: [
      provideRouter(routes)
    ]
};
