import { Eod, FormattedEod, StockModel } from '@models/stock';
import { createReducer, on } from '@ngrx/store';
import * as StockActions from '../stock/stock.actions';

export interface StockState {
  stocks: StockModel[];
  selectedStock: StockModel;
  perPage: number;
  page: number;
  totalItemsCount: number;
  query: string;
  selectedEod: FormattedEod[];
}


export const initialState: StockState = {
  stocks: null,
  selectedStock: null,
  perPage: 10,
  page: 0,
  totalItemsCount: 0,
  query: null,
  selectedEod: null
};

export const stockStateReducer = createReducer(
  initialState,
  on(
    StockActions.resetToInitialState,
    () => ({
      ...initialState
    })
  ),
  on(
    StockActions.getStocksSuccess,
    (state, {stocks}) => ({
      ...state,
      stocks
    })
  ),
  on(
    StockActions.setTotalItemsCount,
    (state, {totalItemsCount}) => ({
      ...state,
      totalItemsCount
    })
  ),
  on(
    StockActions.nextPage,
    (state, {perPage, page}) => ({
      ...state,
      perPage,
      page
    })
  ),
  on(
    StockActions.setSearchQuery,
    (state, {query}) => ({
      ...state,
      query
    })
  ),
  on(
    StockActions.getSelectedStockSuccess,
    (state, {stock}) => ({
      ...state,
      selectedStock: stock,
      selectedEod: convertEodToChartData(stock.eod)
    })
  ),
);


const convertEodToChartData = (eod: Eod[]) => {
  return eod.map(item => {
    return {x: item.date.substr(0, 10), y: [item.open, item.high, item.low, item.close]};
  });
};
