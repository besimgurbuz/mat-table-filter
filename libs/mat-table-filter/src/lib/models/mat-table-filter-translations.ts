import {MatTableFilterOperator} from './filter-selection';

export interface MatTableFilterTranslations {
  operatorsLabel: string;
  inputLabel: string;
  operators: Record<MatTableFilterOperator, string>;
  cancel: string;
  apply: string;
}
