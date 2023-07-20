import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  computed,
  inject,
  signal,
} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatMenuTrigger} from '@angular/material/menu';
import {MatSelectChange} from '@angular/material/select';
import {Subscription} from 'rxjs';
import {MatTableFilterTriggerer} from '../mat-table-filter-triggerer';
import {
  MAT_TABLE_FILTER_NUMBER_DEFAULT_OPERATORS,
  MAT_TABLE_FILTER_STRING_DEFAULT_OPERATORS,
  MatTableFilterOperator,
  MatTableFilterSelection,
} from '../models/filter-selection';
import {MatTableFilterIntlService} from '../services/mat-table-filter-intl.service';

@Component({
  selector: 'mat-table-filter-button',
  templateUrl: './mat-table-filter-button.component.html',
  styleUrls: ['./mat-table-filter-button.component.scss'],
})
export class MatTableFilterButtonComponent
  extends MatTableFilterTriggerer<MatTableFilterSelection>
  implements OnInit, OnDestroy
{
  public intlService = inject(MatTableFilterIntlService);
  private cd = inject(ChangeDetectorRef);
  operators: MatTableFilterOperator[] = [];
  _filterFormGroup: FormGroup = new FormGroup({
    operator: new FormControl('', [Validators.required]),
    input: new FormControl(''),
  });
  _booleanFilterControl = new FormControl(false);
  _filterMenuOpened = signal(false);
  _isFilterApplied = signal(false);
  _isButtonVisible = computed(() => {
    return (
      this._filterMenuOpened() ||
      this._isFilterApplied() ||
      this.parentHovered()
    );
  });
  _requiresInput = true;
  _noInputRequireOperations: MatTableFilterOperator[] = ['BLANK', 'NOT_BLANK'];
  _intlSubs?: Subscription;

  @ViewChild(MatMenuTrigger) private menuTrigger!: MatMenuTrigger;

  ngOnInit(): void {
    if (this.headerType === 'string') {
      this.operators = MAT_TABLE_FILTER_STRING_DEFAULT_OPERATORS;
    } else if (this.headerType === 'number') {
      this.operators = MAT_TABLE_FILTER_NUMBER_DEFAULT_OPERATORS;
    }
    this._intlSubs = this.intlService.changed$.subscribe(() =>
      this.cd.markForCheck()
    );
  }

  ngOnDestroy(): void {
    this._intlSubs?.unsubscribe();
  }

  handleFormSubmit() {
    if (this._filterFormGroup.valid) {
      this.selectedFilterSubject.next({
        key: this.columnKey,
        operator: this._filterFormGroup.get('operator')?.value,
        input: this._filterFormGroup.get('input')?.value,
      });
      this._isFilterApplied.set(true);
      this.menuTrigger.closeMenu();
    }
  }

  handleBooleanFilter() {
    this._isFilterApplied.set(!!this._booleanFilterControl.value);
    if (this._isFilterApplied()) {
      this.selectedFilterSubject.next({
        key: this.columnKey,
        operator: 'EQUALS',
        input: true,
      });
    } else {
      this.selectedFilterSubject.next({
        key: this.columnKey,
      } as MatTableFilterSelection);
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
    this._filterMenuOpened.set(false);
    this._isFilterApplied.set(false);
    this.selectedFilterSubject.next({
      key: this.columnKey,
    } as MatTableFilterSelection);
  }

  handleMenuClose(): void {
    this._filterMenuOpened.set(false);
    if (
      !this._filterFormGroup.value?.input &&
      !this._filterFormGroup.value?.operator
    ) {
      this._filterFormGroup.reset();
    }
  }
}
