import { FC } from 'react';

import { Box, Button, Typography } from '../../../elements';
import { DotsSVG, PlusSVG } from '../../svg';

const Header: FC = () => (
  <Box
    py="L"
    px="XL"
    as="header"
    display="flex"
    bg="foreground"
    alignItems="center"
    borderBottom="1px solid"
    borderColor="border"
    justifyContent="space-between"
  >
    <Typography variant="title1" as="h1">
      Main Board
    </Typography>
    <Box display="flex" alignItems="center" gap="L">
      <Button variant="primary" display="flex" alignItems="center">
        <Typography as="span" variant="normal" display="inline-block" mr="M">
          <PlusSVG width="1rem" />
        </Typography>
        <Typography as="span" variant="normal" lineHeight="1rem">
          Add New Task
        </Typography>
      </Button>
      <Box color="textSoft" lineHeight="0">
        <DotsSVG height="1.5rem" />
      </Box>
    </Box>
  </Box>
);

export default Header;
