import { FC } from 'react';

import { Box, Button, Typography } from '../../elements';
import { COLUMN_MOCK_DATA } from './column.mocks';
import { ColumnProps } from './column.types';
import { isNormalColumn } from './column.utils';
import ColumnTask from './column-task';

const Column: FC<ColumnProps> = (props) => {
  if (!isNormalColumn(props))
    return (
      <Box minWidth="15rem" m="M" p="M">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <input type="text" placeholder="Add new column..." />
          <Button variant="primary" p="M" borderRadius="S">
            +
          </Button>
        </Box>
      </Box>
    );

  const { title, id } = props;

  return (
    <Box minWidth="15rem" m="M" p="M">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="normal">{title}</Typography>
        <Button variant="primary" p="M" borderRadius="S">
          ···
        </Button>
      </Box>
      {COLUMN_MOCK_DATA.filter(({ status }) => status === id).map(
        ({ uuid, name, labels }) => (
          <ColumnTask key={uuid} name={name} labels={labels} />
        )
      )}
    </Box>
  );
};

export default Column;
