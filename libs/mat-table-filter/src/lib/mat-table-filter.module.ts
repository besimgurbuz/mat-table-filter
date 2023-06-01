import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTableFilterButtonComponent} from './mat-table-filter-button/mat-table-filter-button.component';
import {MatTableFilterHeader} from './mat-table-filter-header';
import {MatTableFilterDirective} from './mat-table-filter.directive';

@NgModule({
  declarations: [MatTableFilterDirective, MatTableFilterHeader],
  imports: [
    CommonModule,
    MatTableFilterButtonComponent,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [MatTableFilterDirective, MatTableFilterHeader],
})
export class MatTableFilterModule {}
