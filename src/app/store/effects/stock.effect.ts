import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { StockService } from '../../shared/services/stock.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as StockActions from '../states/stock/stock.actions';
import { map, share, switchMap, withLatestFrom } from 'rxjs/operators';

@Injectable()
export class StockEffect {

  public getStocks$ = createEffect(() => this.actions$
    .pipe(
      ofType(StockActions.getStocks),
      withLatestFrom(this.store$.pipe(select(state => state.stockState))),
      switchMap(([, {perPage, page, query}]) =>
        this.stockService.getStocks({page, perPage}, query)
          .pipe(
            switchMap(res => {
              const stocks = res.data.tickers;
              const pagination = res.pagination;
              return [
                StockActions.getStocksSuccess({stocks}),
                StockActions.setTotalItemsCount({totalItemsCount: pagination.total})
              ];
            })
          )
      ),
      share()
    )
  );

  public getSelectedStock$ = createEffect(() => this.actions$
    .pipe(
      ofType(StockActions.getSelectedStock),
      switchMap(({stock}) =>
        this.stockService.getStock(stock)
          .pipe(
            switchMap(res => {
              return [
                StockActions.getSelectedStockSuccess({stock: res.data})
              ];
            })
          )
      ),
      share()
    )
  );


  constructor(private actions$: Actions,
              private store$: Store<AppState>,
              private stockService: StockService) {
  }
}
