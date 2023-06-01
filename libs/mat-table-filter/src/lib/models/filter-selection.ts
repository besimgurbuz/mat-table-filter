export type MatTableDefaultFilterSelection = {
  key: string;
  operator?: MatTableFilterDefaultOperator;
  input?: string;
};

export const MAT_TABLE_FILTER_DEFAULT_OPERATORS_MAP = {
  CONTAINS: 'CONTAINS',
  NOT_CONTAINS: 'NOT_CONTAINS',
  EQUALS: 'EQUALS',
  NOT_EQUAL: 'NOT_EQUAL',
  STARTS_WITH: 'STARTS_WITH',
  ENDS_WITH: 'ENDS_WITH',
  BLANK: 'BLANK',
  NOT_BLANK: 'NOT_BLANK',
} as const;

export type MatTableFilterDefaultOperator =
  keyof typeof MAT_TABLE_FILTER_DEFAULT_OPERATORS_MAP;

export const MAT_TABLE_FILTER_DEFAULT_OPERATORS = Object.values(
  MAT_TABLE_FILTER_DEFAULT_OPERATORS_MAP
);
