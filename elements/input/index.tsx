import stylin from '@stylin.js/react';
import { forwardRef } from 'react';

import { InputProps } from './input.types';

const Input = forwardRef((props: InputProps, ref) => {
  const StylinInput = stylin('input')();

  return (
    <StylinInput
      all="unset"
      px="L"
      py="M"
      color="text"
      borderRadius="M"
      border="1px solid"
      borderColor="alternative"
      nPlaceholder={{
        color: 'textSoft',
      }}
      nFocus={{
        borderColor: 'accent',
      }}
      {...props}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ref={ref}
    />
  );
});

Input.displayName = 'Input';

export default Input;
