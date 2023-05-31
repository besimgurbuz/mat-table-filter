import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTableFilterButtonComponent} from './mat-table-filter-button/mat-table-filter-button.component';
import {MatTableFilterHeaderDirective} from './mat-table-filter-header.directive';
import {MatTableFilterDirective} from './mat-table-filter.directive';

@NgModule({
  declarations: [MatTableFilterButtonComponent, MatTableFilterDirective],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTableFilterHeaderDirective,
  ],
  exports: [MatTableFilterDirective, MatTableFilterHeaderDirective],
})
export class MatTableFilterModule {}
