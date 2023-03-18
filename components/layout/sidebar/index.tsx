import Link from 'next/link';
import { FC } from 'react';

import { Box, Typography } from '../../../elements';
import { LogoSVG } from '../../svg';
import { NAV_ITEMS } from './sidebar-data';

const Sidebar: FC = () => (
  <Box
    bg="foreground"
    display="flex"
    flexDirection="column"
    borderRight="1px solid"
    borderColor="textSoft"
  >
    <Box p="XL" display="flex">
      <LogoSVG width="2rem" />
      <Typography as="h1" variant="title1" ml="L">
        BOARDi
      </Typography>
    </Box>
    <Box as="nav" minWidth="16rem">
      {NAV_ITEMS.map(({ name, path }) => (
        <Link key={crypto.randomUUID()} href={path}>
          <Box
            p="M"
            my="M"
            pl="XL"
            mr="XL"
            color="textSoft"
            borderTopRightRadius="2rem"
            borderBottomRightRadius="2rem"
            nHover={{ bg: 'alternative', color: 'text' }}
          >
            {name}
          </Box>
        </Link>
      ))}
    </Box>
  </Box>
);

export default Sidebar;
