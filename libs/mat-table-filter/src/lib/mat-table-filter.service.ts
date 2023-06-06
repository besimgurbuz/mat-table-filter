import {Injectable} from '@angular/core';
import {
  MatTableDefaultFilterSelection,
  MatTableFilterDefaultOperator,
} from './models';

@Injectable()
export class MatTableFilterService {
  public currentFilters: MatTableDefaultFilterSelection[] = [];
  private operators: Record<
    MatTableFilterDefaultOperator,
    (
      value: string | number | boolean,
      input?: string | number | boolean
    ) => boolean
  > = {
    EQUALS: (value, input) => value == input,
    NOT_EQAUL: (value, input) => value != input,
    NUM_LESS_THAN: (value, input) => Number(value) < Number(input),
    NUM_GREATER_THAN: (value, input) => Number(value) > Number(input),
    NUM_LESS_THAN_OR_EQUAL_TO: (value, input) => Number(value) <= Number(input),
    NUM_GREATER_THAN_OR_EQUAL_TO: (value, input) =>
      Number(value) >= Number(input),
    STR_CONTAINS: (value, input) => value.toString().includes(input as string),
    STR_NOT_CONTAINS: (value, input) =>
      !value.toString().includes(input as string),
    STR_STARTS_WITH: (value, input) =>
      value.toString().startsWith(input as string),
    STR_ENDS_WITH: (value, input) => value.toString().endsWith(input as string),
    STR_BLANK: (value) => !!value === false,
    STR_NOT_BLANK: (value) => !!value === true,
  };

  public defaultFilterPredicate = (
    data: Record<string, unknown>,
    filter: string
  ) => {
    const filters: MatTableDefaultFilterSelection[] = JSON.parse(
      filter
    ) as MatTableDefaultFilterSelection[];

    if (!filters.length) return true;

    const results = filters.map((filter) => {
      const value = data[filter.key] as string | number | boolean;

      if (value !== undefined) {
        return this.operators[filter.operator](value, filter.input);
      }
      return true;
    });

    return !results.includes(false);
  };

  updateFilter(selection: MatTableDefaultFilterSelection): void {
    if (selection.operator === undefined) {
      this.currentFilters = this.currentFilters.filter(
        (filter) => filter.key !== selection.key
      );
    } else {
      const filterKeys = this.currentFilters.map((filter) => filter.key);
      const appliedFilterIndex = filterKeys.indexOf(selection.key);

      if (appliedFilterIndex >= 0) {
        this.currentFilters[appliedFilterIndex] = selection;
      } else {
        this.currentFilters.push(selection);
      }
    }
  }
}
