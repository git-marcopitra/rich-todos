import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { Box } from '../../elements';

const spin = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LogoWrapper = styled(Box)`
  width: 15rem;
  & > svg {
    animation: ${spin} 20s infinite linear;
  }
`;
