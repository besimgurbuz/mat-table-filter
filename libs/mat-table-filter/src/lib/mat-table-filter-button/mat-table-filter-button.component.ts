import {CommonModule} from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule, MatMenuTrigger} from '@angular/material/menu';
import {MatSelectChange, MatSelectModule} from '@angular/material/select';
import {MatTableTriggerer} from '../mat-table-filter-triggerer';
import {
  MAT_TABLE_FILTER_NUMBER_DEFAULT_OPERATORS,
  MAT_TABLE_FILTER_STRING_DEFAULT_OPERATORS,
  MatTableDefaultFilterSelection,
  MatTableFilterDefaultOperator,
} from '../models/filter-selection';

@Component({
  selector: 'mat-table-filter-button',
  standalone: true,
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
  templateUrl: './mat-table-filter-button.component.html',
  styleUrls: ['./mat-table-filter-button.component.scss'],
})
export class MatTableFilterButtonComponent
  extends MatTableTriggerer<MatTableDefaultFilterSelection>
  implements OnInit
{
  private cd = inject(ChangeDetectorRef);
  operators: MatTableFilterDefaultOperator[] = [];
  _filterFormGroup: FormGroup = new FormGroup({
    operator: new FormControl('', [Validators.required]),
    input: new FormControl(''),
  });
  _booleanFilterControl = new FormControl(false);
  _filterMenuOpened = false;
  _isFilterApplied = false;
  _requiresInput = true;
  _noInputRequireOperations: MatTableFilterDefaultOperator[] = [
    'STR_BLANK',
    'STR_NOT_BLANK',
  ];

  @ViewChild(MatMenuTrigger) private menuTrigger!: MatMenuTrigger;

  ngOnInit(): void {
    if (this.headerType === 'string') {
      this.operators = MAT_TABLE_FILTER_STRING_DEFAULT_OPERATORS;
    } else if (this.headerType === 'number') {
      this.operators = MAT_TABLE_FILTER_NUMBER_DEFAULT_OPERATORS;
    }
  }

  handleFormSubmit() {
    if (this._filterFormGroup.valid) {
      this.selectedFilterSubject.next({
        key: this.columnKey,
        operator: this._filterFormGroup.get('operator')?.value,
        input: this._filterFormGroup.get('input')?.value,
      });
      this._isFilterApplied = true;
      this.menuTrigger.closeMenu();
    }
  }

  handleBooleanFilter() {
    this._isFilterApplied = !!this._booleanFilterControl.value;
    if (this._isFilterApplied) {
      this.selectedFilterSubject.next({
        key: this.columnKey,
        operator: 'EQUALS',
        input: true,
      });
    } else {
      this.selectedFilterSubject.next({
        key: this.columnKey,
      } as MatTableDefaultFilterSelection);
    }
  }

  handleOperatorSelection(event: MatSelectChange): void {
    this._requiresInput = !this._noInputRequireOperations.includes(event.value);
    const inputControl = this._filterFormGroup.get('input');
    if (this._requiresInput) {
      inputControl?.setValue(null);
      inputControl?.setValidators([Validators.required]);
    } else {
      inputControl?.clearValidators();
      inputControl?.setValue(null);
    }
    this.cd.detectChanges();
  }

  handleCancelClick() {
    this.menuTrigger.closeMenu();
    this._filterMenuOpened = false;
    this._isFilterApplied = false;
    this.selectedFilterSubject.next({
      key: this.columnKey,
    } as MatTableDefaultFilterSelection);
  }

  handleMenuClose(): void {
    this._filterMenuOpened = false;
    if (
      !this._filterFormGroup.value?.input &&
      !this._filterFormGroup.value?.operator
    ) {
      this._filterFormGroup.reset();
    }
  }
}
