import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { reducers } from './app.state';
import { StoreModule } from '@ngrx/store';
import { extModules } from './build-specifics';
import { EffectsModule } from '@ngrx/effects';
import { StockEffect } from './effects/stock.effect';


@NgModule({
  imports: [
    StoreModule.forRoot(reducers),
    extModules,
    CommonModule,
    EffectsModule.forRoot([
      StockEffect
    ])
  ]
})
export class AppStoreModule {
}
