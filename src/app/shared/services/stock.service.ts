import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../../conts/api.const';
import { Observable } from 'rxjs';
import { StockResponse } from '@models/stock';
import { PaginationParams } from '@models/shared';

@Injectable()

export class StockService {

  constructor(private http: HttpClient) {
  }

  public getStocks(pagination: PaginationParams, searchQuery: string): Observable<StockResponse> {
    return this.http.get<StockResponse>(`${API.stocks}&limit=${pagination.perPage}&offset=${pagination.page}&search=${searchQuery ? searchQuery : ''}`);
  }

  public getStock(symbol: string):Observable<any> {
    return this.http.get(`${API.view(symbol)}`);
  }
}
