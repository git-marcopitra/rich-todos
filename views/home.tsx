import { FC } from 'react';

import { Column, Layout } from '../components';
import { Box } from '../elements';

const Home: FC = () => (
  <Layout pageTitle="Home">
    <Box as="section" display="flex" overflow="auto" pb="XL">
      <Column title="Backlog" id="backlog" />
      <Column title="Todo" id="todo" />
      <Column title="In Progress" id="progress" />
      <Column title="Done" id="done" />
      <Column newColumn />
    </Box>
  </Layout>
);

export default Home;
