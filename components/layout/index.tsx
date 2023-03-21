import Head from 'next/head';
import { FC } from 'react';

import { Box } from '../../elements';
import Header from './header';
import { LayoutProps } from './layout.types';
import Sidebar from './sidebar';

const Layout: FC<LayoutProps> = ({ pageTitle = '', children }) => {
  const title = `${pageTitle} | Template`;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
      </Head>
      <Box as="main" color="text" height="100vh" display="flex" bg="background">
        <Sidebar />
        <Box
          height="100vh"
          display="flex"
          flexDirection="column"
          width="calc(100vw - 16rem)"
        >
          <Header />
          {children}
        </Box>
      </Box>
    </>
  );
};

export default Layout;
