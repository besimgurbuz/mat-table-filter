import {ObjectValues} from './object-values';

export type MatTableDefaultFilterSelection = {
  key: string;
  operator: MatTableFilterDefaultOperator;
  input?: string | boolean | number;
};

const MAT_TABLE_FILTER_STRING_DEFAULT_OPERATORS_MAP = {
  EQUALS: 'EQUALS',
  NOT_EQUAL: 'NOT_EQUAL',
  CONTAINS: 'CONTAINS',
  NOT_CONTAINS: 'NOT_CONTAINS',
  STARTS_WITH: 'STARTS_WITH',
  ENDS_WITH: 'ENDS_WITH',
  BLANK: 'BLANK',
  NOT_BLANK: 'NOT_BLANK',
} as const;

const MAT_TABLE_FILTER_NUMBER_DEFAULT_OPERATORS_MAP = {
  EQUALS: 'EQUALS',
  NOT_EQUAL: 'NOT_EQUAL',
  LESS_THAN: 'LESS_THAN',
  GREATER_THAN: 'GREATER_THAN',
  LESS_THAN_OR_EQUAL_TO: 'LESS_THAN_OR_EQUAL_TO',
  GREATER_THAN_OR_EQUAL_TO: 'GREATER_THAN_OR_EQUAL_TO',
} as const;

export type MatTableFilterStringDefaultOperator = ObjectValues<
  typeof MAT_TABLE_FILTER_STRING_DEFAULT_OPERATORS_MAP
>;

export type MatTableFilterNumberDefaultOperator = ObjectValues<
  typeof MAT_TABLE_FILTER_NUMBER_DEFAULT_OPERATORS_MAP
>;

export type MatTableFilterDefaultOperator =
  | MatTableFilterStringDefaultOperator
  | MatTableFilterNumberDefaultOperator;

export const MAT_TABLE_FILTER_STRING_DEFAULT_OPERATORS: MatTableFilterStringDefaultOperator[] =
  Object.values(MAT_TABLE_FILTER_STRING_DEFAULT_OPERATORS_MAP);

export const MAT_TABLE_FILTER_NUMBER_DEFAULT_OPERATORS: MatTableFilterNumberDefaultOperator[] =
  Object.values(MAT_TABLE_FILTER_NUMBER_DEFAULT_OPERATORS_MAP);
