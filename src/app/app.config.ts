import { ApplicationConfig} from '@angular/core';
import { provideRouter, Routes} from '@angular/router';
import { TelaInicioComponent } from './cliente/tela-inicio/tela-inicio.component';
import { CardapioComponent } from './cliente/cardapio/cardapio.component';
import { PedidoComponent } from './cliente/pedido/pedido.component';
import { AcompanharPedidoComponent } from './cliente/acompanhar-pedido/acompanhar-pedido.component';
import { FinalizacaoComponent } from './cliente/finalizacao/finalizacao.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { GestaoComponent } from './gestor/gestao/gestao.component';
import { AdicionarPratoComponent } from './gestor/adicionar-prato/adicionar-prato.component';

export const routes: Routes = [
      { path: '', component: HomeComponent },
      { path: '', component: TelaInicioComponent },
      { path: 'gestao', component: GestaoComponent },
      { path: 'menu', component: MenuComponent },
      { path: 'adicionar-prato', component: AdicionarPratoComponent },
      { path: 'cardapio', component: CardapioComponent },
      { path: 'pedido', component: PedidoComponent },
      { path: 'acompanhar-pedido', component: AcompanharPedidoComponent },
      { path: 'finalizacao', component: FinalizacaoComponent },
      { path: '**', redirectTo: '/cardapio', pathMatch: 'full' },

    ];

  export const appConfig: ApplicationConfig = {
    providers: [
      provideRouter(routes)
    ]
};
