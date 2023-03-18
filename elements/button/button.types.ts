import { ButtonHTMLAttributes } from 'react';

import { Theme } from '../../design-system/main-theme';

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  variant: keyof Theme['buttons'];
}
