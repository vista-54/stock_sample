import { createAction } from '@ngrx/store';

export const resetToInitialState = createAction(
  '[STOCK] Reset To Initial State'
);

export const getStocks = createAction(
  '[STOCK] Get Stocks From Server'
);
