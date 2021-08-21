import { StockModel } from '../../models/stock';
import { createReducer, on } from '@ngrx/store';
import * as StockActions from '../stock/stock.actions';

export interface StockState {
  stocks: StockModel[];
  selectedStock: StockModel;
}


export const initialState: StockState = {
  stocks: null,
  selectedStock: null
};

export const stockStateReducer = createReducer(
  initialState,
  on(
    StockActions.resetToInitialState,
    () => ({
      ...initialState
    })
  ),
);
