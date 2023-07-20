import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {MatTableFilterTranslations} from '../models/mat-table-filter-translations';

export interface MatTableFilterIntl {
  readonly changed$: Subject<void>;
  translations: MatTableFilterTranslations;
}

@Injectable({
  providedIn: 'root',
})
export class MatTableFilterIntlService implements MatTableFilterIntl {
  changed$: Subject<void> = new Subject<void>();
  translations: MatTableFilterTranslations = {
    operatorsLabel: 'Operators',
    inputLabel: 'Input',
    operators: {
      EQUALS: 'Equals',
      NOT_EQUAL: 'Not equal',
      CONTAINS: 'Contains',
      NOT_CONTAINS: 'Not contains',
      STARTS_WITH: 'Starts with',
      ENDS_WITH: 'Ends with',
      BLANK: 'Blank',
      NOT_BLANK: 'Not blank',
      LESS_THAN: 'Less than',
      GREATER_THAN: 'Greater than',
      LESS_THAN_OR_EQUAL_TO: 'Less than or equal to',
      GREATER_THAN_OR_EQUAL_TO: 'Greater than or equal to',
    },
    apply: 'Apply',
    cancel: 'Cancel',
  };
}
