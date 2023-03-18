import stylin, { StylinComponentProps, variant } from '@stylin.js/react';
import { forwardRef } from 'react';

import { ButtonProps } from './button.types';

const Button = forwardRef((props: ButtonProps & StylinComponentProps, ref) => {
  const ButtonElement = stylin<ButtonProps>('button')(
    variant({
      scale: 'buttons',
      property: 'variant',
    }),
    variant({ property: 'effect', scale: 'effects' })
  );

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <ButtonElement {...props} ref={ref} />;
});

Button.displayName = 'Button';

export default Button;
