import stylin, { StylinComponentProps } from '@stylin.js/react';
import { forwardRef } from 'react';

import { BoxProps } from './box.types';

const Box = forwardRef(
  ({ as, ...props }: BoxProps & StylinComponentProps, ref) => {
    const BoxElement = stylin<BoxProps>(as || 'div')();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return <BoxElement {...props} ref={ref} />;
  }
);

Box.displayName = 'Box';

export default Box;
