import {MatTableFilterDefaultOperator} from './filter-selection';

export interface MatTableFilterTranslations {
  operatorsLabel: string;
  inputLabel: string;
  operators: Record<MatTableFilterDefaultOperator, string>;
  cancel: string;
  apply: string;
}
