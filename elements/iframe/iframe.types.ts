import { StylinComponentProps } from '@stylin.js/react';
import { IframeHTMLAttributes } from 'react';

export type IframeElementProps = IframeHTMLAttributes<
  Omit<HTMLIFrameElement, 'color' | 'translate'>
>;

export type IframeProps = IframeElementProps & StylinComponentProps;
