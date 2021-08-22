import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppState } from '@store/app.state';
import * as StockActions from '@states/stock/stock.actions';
import { Observable } from 'rxjs';
import { StockModel } from '@models/stock';
import * as StockSelectors from '@states/stock/stock.selectors';
import * as ApexCharts from 'apexcharts';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-stock-view',
  templateUrl: './stock-view.component.html',
  styleUrls: ['./stock-view.component.scss']
})
export class StockViewComponent implements OnInit {
  public selectStock$: Observable<StockModel> = this.store$.pipe(select(StockSelectors.selectSelectedStock));
  public selectEod$: Observable<{ x: string; y: number[] }[]> = this.store$.pipe(select(StockSelectors.selectEod));
  private chart: ApexCharts;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private store$: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store$.dispatch(StockActions.resetToInitialState());
    this.route.params.subscribe(res => {
      this.store$.dispatch(StockActions.getSelectedStock({stock: res?.symbol}));
    });
    this.initChart();

    this.selectEod$
      .pipe(
        untilDestroyed(this)
      )
      .subscribe(res => {
        if (res) {
          this.chart.updateSeries([{
            data: res
          }], false);
        }
      });
  }


  private initChart() {
    const options = {
      chart: {
        type: 'candlestick'
      },
      series: [{
        name: 'History',
        data: []
      }],
      noData: {
        text: 'Loading...'
      }
    };
    this.chart = new ApexCharts(document.getElementById('chart-container'), options);

    this.chart.render();
  }


  public back() {
    this.router.navigateByUrl('stock/list');
  }
}
