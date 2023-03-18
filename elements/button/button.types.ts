import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  variant: 'primary' | 'secondary' | 'tertiary' | 'neutral' | 'special';
}
