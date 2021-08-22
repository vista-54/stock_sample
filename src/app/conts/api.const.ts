const apiEndpoint = 'http://api.marketstack.com/v1/';

export const API = {
  stocks: `${apiEndpoint}exchanges/XNAS/tickers?access_key=c5581418df21e3ac07ce0d5dfa5d2ce1`,
  view: (symbol: string) => {
    return `${apiEndpoint}tickers/${symbol}/eod?access_key=c5581418df21e3ac07ce0d5dfa5d2ce1`;
  }
};
