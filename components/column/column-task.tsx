import { FC } from 'react';

import { Box, Typography } from '../../elements';
import { ColumnTaskProps } from './column.types';

const ColumnTask: FC<ColumnTaskProps> = ({ name, labels }) => (
  <Box
    bg="foreground"
    p="L"
    mt="L"
    borderRadius="M"
    draggable
    boxShadow="0.2rem 0.2rem 0.2rem  #5C5A8C44"
  >
    <Typography variant="normal" mb="L">
      {name}
    </Typography>
    <Box>
      {labels.map((label) => (
        <Typography
          px="M"
          mr="S"
          bg="accent"
          variant="small"
          borderRadius="M"
          display="inline-block"
          key={crypto.randomUUID()}
          textTransform="capitalize"
        >
          {label}
        </Typography>
      ))}
    </Box>
  </Box>
);

export default ColumnTask;
