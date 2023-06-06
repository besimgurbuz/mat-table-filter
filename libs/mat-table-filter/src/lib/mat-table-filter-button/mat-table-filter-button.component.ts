import {
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatMenuTrigger} from '@angular/material/menu';
import {MatSelectChange} from '@angular/material/select';
import {MatTableTriggerer} from '../mat-table-filter-triggerer';
import {
  MAT_TABLE_FILTER_NUMBER_DEFAULT_OPERATORS,
  MAT_TABLE_FILTER_STRING_DEFAULT_OPERATORS,
  MatTableDefaultFilterSelection,
  MatTableFilterDefaultOperator,
} from '../models/filter-selection';
import {MatTableFilterIntlService} from '../services/mat-table-filter-intl.service';

@Component({
  selector: 'mat-table-filter-button',
  templateUrl: './mat-table-filter-button.component.html',
  styleUrls: ['./mat-table-filter-button.component.scss'],
})
export class MatTableFilterButtonComponent
  extends MatTableTriggerer<MatTableDefaultFilterSelection>
  implements OnInit
{
  public intlService = inject(MatTableFilterIntlService);
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
    'BLANK',
    'NOT_BLANK',
  ];

  @ViewChild(MatMenuTrigger) private menuTrigger!: MatMenuTrigger;

  ngOnInit(): void {
    if (this.headerType === 'string') {
      this.operators = MAT_TABLE_FILTER_STRING_DEFAULT_OPERATORS;
    } else if (this.headerType === 'number') {
      this.operators = MAT_TABLE_FILTER_NUMBER_DEFAULT_OPERATORS;
    }
    this.intlService.changed$
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.cd.markForCheck());
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
