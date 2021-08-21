import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'stock',
    loadChildren: () => import('./pages/stock/stock.module').then(m => m.StockModule),
  },
  {
    path: '',
    redirectTo: '/stock',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
