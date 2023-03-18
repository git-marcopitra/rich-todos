import { FC } from 'react';

import { Box, Typography } from '../../../elements';

const Header: FC = () => (
  <Box as="header" m="L" display="flex" justifyContent="space-between">
    <Typography variant="title1" as="h1" m="XXL">
      RichTodos
    </Typography>
    <Box display="flex">
      <Box mx="M">O</Box>
      <Box mx="M">O</Box>
      <Box mx="M">O</Box>
      <Box mx="M">O</Box>
    </Box>
  </Box>
);

export default Header;
