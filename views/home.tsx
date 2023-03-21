import { FC, useState } from 'react';

import { Column, Layout } from '../components';
import {
  COLUMN_MOCK_DATA,
  TASK_MOCK_DATA,
} from '../components/column/column.mocks';
import { CardData, IColumn } from '../components/column/column.types';
import { Box } from '../elements';

const Home: FC = () => {
  const [data, setData] = useState<ReadonlyArray<CardData>>(TASK_MOCK_DATA);
  const [columns, setColumns] =
    useState<ReadonlyArray<IColumn>>(COLUMN_MOCK_DATA);

  const handleMoveTask = (uuid: string) => (target: string) => {
    setData([
      ...data.filter(({ uuid: key }) => key !== uuid),
      {
        ...data.find(({ uuid: key }) => key === uuid)!,
        status: target,
      },
    ]);
  };

  return (
    <Layout pageTitle="Home">
      <Box
        as="section"
        display="flex"
        flexWrap="nowrap"
        overflowX="auto"
        overflowY="hidden"
      >
        {columns.map(({ uuid, id, name, color }) => (
          <Column
            id={id}
            key={uuid}
            title={name}
            color={color}
            handleMoveTask={handleMoveTask}
            data={data.filter(({ status }) => status === id)}
          />
        ))}
        <Column newColumn setColumns={setColumns} />
      </Box>
    </Layout>
  );
};

export default Home;
