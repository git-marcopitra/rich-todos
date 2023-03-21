import { css } from '@emotion/react';

import space from '../../common/space';
import colors from '../colors';

export const primary = css`
  all: unset;
  cursor: pointer;
  font-weight: 700;
  border-radius: 2rem;
  align-items: center;
  display: inline-flex;
  justify-content: center;
  background: ${colors.accent};
  padding: ${space.L} ${space.XL};
  font-family: 'Andika', sans-serif;
  transition: background 300ms ease-in-out, transform 300ms ease-in-out;
  &:hover {
    transform: translateY(-0.2rem);
    background: ${colors.alternative};
  }
  &:disabled {
    cursor: not-allowed;
    background: ${colors.border};
    &:hover {
      background: ${colors.border};
    }
  }
`;
