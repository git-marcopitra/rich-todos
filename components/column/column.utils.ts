import { ColumnProps, NewColumnProps, NormalColumnProps } from './column.types';

export const isNormalColumn = (
  props: ColumnProps
): props is NormalColumnProps => !(props as NewColumnProps).newColumn;
