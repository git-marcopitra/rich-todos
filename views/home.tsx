import { FC, useState } from 'react';

import { Column, Layout } from '../components';
import { COLUMN_MOCK_DATA } from '../components/column/column.mocks';
import { CardData, Columns } from '../components/column/column.types';
import { Box } from '../elements';

const Home: FC = () => {
  const [data, setData] = useState<ReadonlyArray<CardData>>(COLUMN_MOCK_DATA);

  const handleMoveTask = (uuid: string) => (target: string) => {
    setData([
      ...data.filter(({ uuid: key }) => key !== uuid),
      {
        ...data.find(({ uuid: key }) => key === uuid)!,
        status: target as Columns,
      },
    ]);
  };

  return (
    <Layout pageTitle="Home">
      <Box as="section" display="flex" overflow="auto" pb="XL">
        <Column
          id="backlog"
          title="Backlog"
          handleMoveTask={handleMoveTask}
          data={data.filter(({ status }) => status === 'backlog')}
        />
        <Column
          id="todo"
          title="Todo"
          handleMoveTask={handleMoveTask}
          data={data.filter(({ status }) => status === 'todo')}
        />
        <Column
          id="progress"
          title="In Progress"
          handleMoveTask={handleMoveTask}
          data={data.filter(({ status }) => status === 'progress')}
        />
        <Column
          id="done"
          title="Done"
          handleMoveTask={handleMoveTask}
          data={data.filter(({ status }) => status === 'done')}
        />
        <Column newColumn />
      </Box>
    </Layout>
  );
};

export default Home;
