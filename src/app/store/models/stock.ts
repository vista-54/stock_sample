export declare interface StockModel {
  name: string;
  symbol: string;
  has_intraday: boolean;
  has_eod: boolean;
  country?: string;
  eod?: Eod[];
}

export declare interface StockResponse {
  pagination: Pagination;
  data: {
    name: string;
    acronym: string;
    mic: string;
    country: string;
    city: string;
    website: string;
    tickers: StockModel[];
  };
}

export declare interface Pagination {
  limit: number;
  offset: number;
  count: number;
  total: number;
}

export declare interface Eod {
  adj_close: number;
  adj_high: number;
  adj_low: number;
  adj_open: number;
  adj_volume: number;
  close: number;
  date: string;
  exchange: string;
  high: number;
  low: number;
  open: number;
  split_factor: number;
  symbol: string;
  volume: number;
}

export declare interface FormattedEod {
  x: string;
  y: number[];
}

