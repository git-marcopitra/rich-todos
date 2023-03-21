import { FC } from 'react';
import { v4 } from 'uuid';

import { Box, Typography } from '../../elements';
import { ColumnTaskProps } from './column.types';

const ColumnTask: FC<ColumnTaskProps> = ({ onMoveTask, name, labels }) => {
  const onDrop = () => {
    const columnId = sessionStorage.getItem('column.id')!;
    sessionStorage.removeItem('column.id');

    onMoveTask(columnId);
  };

  return (
    <Box
      p="L"
      mt="L"
      draggable
      bg="foreground"
      borderRadius="M"
      onDragEnd={onDrop}
      boxShadow="0.2rem 0.2rem 0.2rem  #5C5A8C33"
      nHover={{
        cursor: 'grab',
      }}
      nActive={{
        opacity: 0,
        cursor: 'grabbing',
        boxShadow: '0 0 0.5rem  #5C5A8C88',
      }}
      nFocus={{
        boxShadow: '0 0 0.2rem  #5C5A8C88',
      }}
    >
      <Typography variant="normal" mb="L">
        {name}
      </Typography>
      <Box>
        {labels.map((label) => (
          <Typography
            px="M"
            mr="S"
            key={v4()}
            bg="accent"
            variant="small"
            borderRadius="M"
            display="inline-block"
            textTransform="capitalize"
          >
            {label}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default ColumnTask;
