import { FC } from 'react';

import { Column, Layout } from '../components';
import { Box } from '../elements';

const Home: FC = () => (
  <Layout pageTitle="Home">
    <Box display="flex">
      <Column title="Todo" id="todo" />
      <Column title="In Progress" id="progress" />
      <Column title="Done" id="done" />
      <Column newColumn />
    </Box>
  </Layout>
);

export default Home;
