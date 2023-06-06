import {ObjectValues} from './object-values';

export type MatTableDefaultFilterSelection = {
  key: string;
  operator: MatTableFilterDefaultOperator;
  input?: string | boolean | number;
};

const MAT_TABLE_FILTER_STRING_DEFAULT_OPERATORS_MAP = {
  EQUALS: 'EQUALS',
  NOT_EQUAL: 'NOT_EQAUL',
  CONTAINS: 'STR_CONTAINS',
  NOT_CONTAINS: 'STR_NOT_CONTAINS',
  STARTS_WITH: 'STR_STARTS_WITH',
  ENDS_WITH: 'STR_ENDS_WITH',
  BLANK: 'STR_BLANK',
  NOT_BLANK: 'STR_NOT_BLANK',
} as const;

const MAT_TABLE_FILTER_NUMBER_DEFAULT_OPERATORS_MAP = {
  EQUALS: 'EQUALS',
  NOT_EQUAL: 'NOT_EQAUL',
  LESS_THAN: 'NUM_LESS_THAN',
  GREATER_THAN: 'NUM_GREATER_THAN',
  LESS_THAN_OR_EQUAL_TO: 'NUM_LESS_THAN_OR_EQUAL_TO',
  GREATER_THAN_OR_EQUAL_TO: 'NUM_GREATER_THAN_OR_EQUAL_TO',
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
