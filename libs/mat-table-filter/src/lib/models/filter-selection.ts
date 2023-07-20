import {ObjectValues} from './object-values';

export type MatTableFilterSelection = {
  key: string;
  operator: MatTableFilterOperator;
  input?: string | boolean | number;
};

const MAT_TABLE_FILTER_STRING_OPERATORS_MAP = {
  EQUALS: 'EQUALS',
  NOT_EQUAL: 'NOT_EQUAL',
  CONTAINS: 'CONTAINS',
  NOT_CONTAINS: 'NOT_CONTAINS',
  STARTS_WITH: 'STARTS_WITH',
  ENDS_WITH: 'ENDS_WITH',
  BLANK: 'BLANK',
  NOT_BLANK: 'NOT_BLANK',
} as const;

const MAT_TABLE_FILTER_NUMBER_OPERATORS_MAP = {
  EQUALS: 'EQUALS',
  NOT_EQUAL: 'NOT_EQUAL',
  LESS_THAN: 'LESS_THAN',
  GREATER_THAN: 'GREATER_THAN',
  LESS_THAN_OR_EQUAL_TO: 'LESS_THAN_OR_EQUAL_TO',
  GREATER_THAN_OR_EQUAL_TO: 'GREATER_THAN_OR_EQUAL_TO',
} as const;

export type MatTableFilterStringOperator = ObjectValues<
  typeof MAT_TABLE_FILTER_STRING_OPERATORS_MAP
>;

export type MatTableFilterNumberOperator = ObjectValues<
  typeof MAT_TABLE_FILTER_NUMBER_OPERATORS_MAP
>;

export type MatTableFilterOperator =
  | MatTableFilterStringOperator
  | MatTableFilterNumberOperator;

export const MAT_TABLE_FILTER_STRING_DEFAULT_OPERATORS: MatTableFilterStringOperator[] =
  Object.values(MAT_TABLE_FILTER_STRING_OPERATORS_MAP);

export const MAT_TABLE_FILTER_NUMBER_DEFAULT_OPERATORS: MatTableFilterNumberOperator[] =
  Object.values(MAT_TABLE_FILTER_NUMBER_OPERATORS_MAP);
