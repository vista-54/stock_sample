import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { StockComponent } from './stock.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { StockViewComponent } from './stock-view/stock-view.component';

const routes: Routes = [
  {
    path: '', component: StockComponent,
    children: [
      {
        path: 'list',
        component: StockListComponent
      },
      {
        path: 'view',
        component: StockViewComponent
      },
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule {
}
