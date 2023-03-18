import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';

export interface BoxProps
  extends StylinComponentProps,
    Omit<HTMLAttributes<HTMLDivElement>, 'color' | 'translate'> {
  as?: keyof JSX.IntrinsicElements;
}
