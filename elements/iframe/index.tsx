import stylin from '@stylin.js/react';
import { FC } from 'react';

import { IframeElementProps, IframeProps } from './iframe.types';

const Iframe: FC<IframeProps> = stylin<IframeElementProps>('iframe')();

export default Iframe;
