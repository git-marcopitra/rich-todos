import { StylinComponentProps } from '@stylin.js/react';
import { InputHTMLAttributes } from 'react';

export type InputElementProps = InputHTMLAttributes<
  Omit<HTMLInputElement, 'color' | 'translate'>
>;

export type InputProps = InputElementProps & StylinComponentProps;
