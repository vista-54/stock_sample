import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { reducers } from './app.state';


@NgModule({
  imports: [
    // StoreModule.forRoot(reducers),
    CommonModule
  ]
})
export class AppStoreModule {
}
