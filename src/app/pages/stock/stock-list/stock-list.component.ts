import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { select, Store } from '@ngrx/store';
import { AppState } from '@store/app.state';
import * as StockActions from '../../../store/states/stock/stock.actions';
import { Observable } from 'rxjs';
import { StockModel } from '@models/stock';
import * as StockSelectors from '@states/stock/stock.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss']
})
export class StockListComponent implements OnInit {
  public selectStocks$: Observable<StockModel[]> = this.store$.pipe(select(StockSelectors.selectStocks));
  public totalItemsCount$: Observable<number> = this.store$.pipe(select(StockSelectors.selectTotalItemsCount));
  public page$: Observable<number> = this.store$.pipe(select(StockSelectors.selectPage));
  public perPage$: Observable<number> = this.store$.pipe(select(StockSelectors.selectPerPage));


  displayedColumns: string[] = ['name', 'symbol'];
  dataSource: MatTableDataSource<any>;

  constructor(private store$: Store<AppState>,
              private router: Router) {
  }


  public ngOnInit(): void {
    this.store$.dispatch(StockActions.resetToInitialState());
    this.store$.dispatch(StockActions.getStocks());
  }

  public open(symbol: string): void {
    this.router.navigate(['stock/view', symbol]);
  }

  public applyFilter(event: Event): void {
    this.store$.dispatch(StockActions.resetToInitialState());
    const filterValue = (event.target as HTMLInputElement).value;
    this.store$.dispatch(StockActions.setSearchQuery({query: filterValue}));
    this.store$.dispatch(StockActions.getStocks());
  }

  public nextPage(ev: { pageIndex: number; pageSize: number }): void {
    this.store$.dispatch(StockActions.resetToInitialState());
    this.store$.dispatch(StockActions.nextPage({page: ev.pageIndex, perPage: ev.pageSize}));
    this.store$.dispatch(StockActions.getStocks());
  }
}
