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
      <Box
        as="main"
        color="text"
        display="flex"
        bg="background"
        minHeight="100vh"
        alignItems="stretch"
      >
        <Sidebar />
        <Box width="100%">
          <Header />
          {children}
        </Box>
      </Box>
    </>
  );
};

export default Layout;
