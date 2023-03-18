import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { v4 } from 'uuid';

import { Box, Typography } from '../../../elements';
import { LogoSVG } from '../../svg';
import { NAV_ITEMS } from './sidebar-data';

const Sidebar: FC = () => {
  const { asPath } = useRouter();

  return (
    <Box
      display="flex"
      bg="foreground"
      flexDirection="column"
      borderRight="1px solid"
      borderColor="border"
    >
      <Box p="XL" display="flex" alignItems="center">
        <LogoSVG height="2.5rem" />
        <Typography as="h1" variant="title1" ml="L">
          BOARDi
        </Typography>
      </Box>
      <Box as="nav" minWidth="16rem">
        {NAV_ITEMS.map(({ name, path }) => (
          <Link key={v4()} href={path}>
            <Box
              p="M"
              my="M"
              pl="XL"
              mr="XL"
              color="textSoft"
              borderTopRightRadius="2rem"
              borderBottomRightRadius="2rem"
              {...(path === asPath && { bg: 'accent', color: 'text' })}
              nHover={{ bg: 'alternative', color: 'text' }}
            >
              {name}
            </Box>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default Sidebar;
