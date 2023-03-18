import { HTMLAttributes } from 'react';

import { Theme } from '../../design-system/main-theme';

export interface TypographyProps
  extends Omit<HTMLAttributes<HTMLParagraphElement>, 'color' | 'translate'> {
  as?: keyof JSX.IntrinsicElements;
  variant: keyof Theme['typography'];
}
