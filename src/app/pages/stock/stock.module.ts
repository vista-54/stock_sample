import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockComponent } from './stock.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { StockViewComponent } from './stock-view/stock-view.component';
import { RouterModule } from '@angular/router';
import { StockRoutingModule } from './stock-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [StockComponent, StockListComponent, StockViewComponent],
  imports: [
    CommonModule,
    RouterModule,
    StockRoutingModule,
    MatFormFieldModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class StockModule {
}
