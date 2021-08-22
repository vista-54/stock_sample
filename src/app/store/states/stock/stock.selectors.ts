import { AppState } from '../../app.state';
import { createSelector } from '@ngrx/store';
import { StockState } from './stock.reducer';

export const selectStock = (state: AppState) => state.stockState;

export const selectStocks = createSelector(selectStock, ({stocks}: StockState) => stocks);
export const selectTotalItemsCount = createSelector(selectStock, ({totalItemsCount}: StockState) => totalItemsCount);
export const selectPage = createSelector(selectStock, ({page}: StockState) => page);
export const selectPerPage = createSelector(selectStock, ({perPage}: StockState) => perPage);
export const selectSelectedStock = createSelector(selectStock, ({selectedStock}: StockState) => selectedStock);
export const selectEod = createSelector(selectStock, ({selectedEod}: StockState) => selectedEod);
