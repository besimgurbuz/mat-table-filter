import {NgModule} from '@angular/core';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableFilterModule} from 'ng-mat-table-filter';
import {AppComponent} from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatTableFilterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
