import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatTableFilterButtonComponent} from './mat-table-filter-button/mat-table-filter-button.component';
import {MatTableFilterHeader} from './mat-table-filter-header';
import {MatTableFilterDirective} from './mat-table-filter.directive';

@NgModule({
  declarations: [
    MatTableFilterDirective,
    MatTableFilterHeader,
    MatTableFilterButtonComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatBadgeModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule,
  ],
  exports: [
    MatTableFilterDirective,
    MatTableFilterHeader,
    MatTableFilterButtonComponent,
  ],
})
export class MatTableFilterModule {}
