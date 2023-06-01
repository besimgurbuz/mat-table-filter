import {CommonModule} from '@angular/common';
import {Component, ViewChild} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule, MatMenuTrigger} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatTableTriggerer} from '../mat-table-filter-triggerer';
import {
  MAT_TABLE_FILTER_DEFAULT_OPERATORS,
  MatTableDefaultFilterSelection,
} from '../models/filter-selection';

@Component({
  selector: 'mat-table-filter-button',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
  ],
  templateUrl: './mat-table-filter-button.component.html',
  styleUrls: ['./mat-table-filter-button.component.scss'],
})
export class MatTableFilterButtonComponent extends MatTableTriggerer<MatTableDefaultFilterSelection> {
  operators = MAT_TABLE_FILTER_DEFAULT_OPERATORS;
  _filterFormGroup: FormGroup = new FormGroup({
    operator: new FormControl('', [Validators.required]),
    input: new FormControl(''),
  });

  @ViewChild(MatMenuTrigger) private menuTrigger!: MatMenuTrigger;

  handleCancelClick() {
    this.menuTrigger.closeMenu();
    this.selectedFilterSubject.next({
      key: this.columnKey,
      operator: undefined,
      input: undefined,
    });
  }
}
