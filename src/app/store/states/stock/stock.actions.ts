import { createAction, props } from '@ngrx/store';
import { StockModel } from '../../models/stock';

export const resetToInitialState = createAction(
  '[STOCK] Reset To Initial State'
);

export const getStocks = createAction(
  '[STOCK] Get Stocks From Server'
);

export const getStocksSuccess = createAction(
  '[STOCK] Get Stocks From Server Success',
  props<{ stocks: StockModel[] }>()
);

export const getStocksError = createAction(
  '[STOCK] Get Stocks From Server Error'
);

export const setTotalItemsCount = createAction(
  '[STOCK] Set Total Items Count',
  props<{ totalItemsCount: number }>()
);

export const nextPage = createAction(
  '[STOCK] Next Page',
  props<{ perPage: number; page: number }>()
);

export const setSearchQuery = createAction(
  '[STOCK] Set Search Query',
  props<{ query: string }>()
);

export const getSelectedStock = createAction(
  '[STOCK] Get Selected Stock from server',
  props<{ stock: string }>()
);

export const getSelectedStockSuccess = createAction(
  '[STOCK] Set Selected Stock Success',
  props<{ stock: StockModel }>()
);

export const getSelectedStockError = createAction(
  '[STOCK] Set Selected Stock Error',
);
