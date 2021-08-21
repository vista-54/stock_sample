import { StockState, stockStateReducer } from './states/stock/stock.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  stockState: StockState;
}

export const reducers: ActionReducerMap<any> = {
  stockState: stockStateReducer
};
