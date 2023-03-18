import stylin, { StylinComponentProps, variant } from '@stylin.js/react';
import { forwardRef } from 'react';

import { TypographyProps } from './typography.types';

const Typography = forwardRef(
  ({ as, ...props }: TypographyProps & StylinComponentProps, ref) => {
    const TypographyElement = stylin<TypographyProps>(as || 'p')(
      variant({ property: 'variant', scale: 'typography' })
    );

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return <TypographyElement ref={ref} {...props} />;
  }
);

Typography.displayName = 'Typography';

export default Typography;
