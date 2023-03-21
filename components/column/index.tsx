import { FC, useRef } from 'react';
import { v4 } from 'uuid';

import { Box, Button, Input, Typography } from '../../elements';
import { generateColor } from '../../utils';
import { ColumnProps } from './column.types';
import { isNormalColumn } from './column.utils';
import ColumnTask from './column-task';

const Column: FC<ColumnProps> = (props) => {
  const newColumnNameRef = useRef<HTMLInputElement>(null);

  if (!isNormalColumn(props)) {
    const { setColumns } = props;

    const handleCreateColumn = () => {
      const columnName = newColumnNameRef.current?.value;

      if (!columnName) console.error('>> column name is empty');

      const newColumn = {
        uuid: v4(),
        color: generateColor(),
        id: columnName as string,
        name: columnName as string,
      };

      setColumns((columns) => [...columns, newColumn]);
    };

    return (
      <Box minWidth="18rem" m="M" p="M">
        <Box display="flex" justifyContent="space-between" alignItems="stretch">
          <Input
            flex="1"
            type="text"
            ref={newColumnNameRef}
            borderTopLeftRadius="L"
            borderTopRightRadius="0"
            borderBottomLeftRadius="L"
            borderBottomRightRadius="0"
            placeholder="Add new column..."
          />
          <Button
            p="0"
            px="L"
            fontSize="XXXL"
            fontWeight={400}
            variant="primary"
            borderTopLeftRadius="0"
            borderTopRightRadius="L"
            borderBottomLeftRadius="0"
            borderBottomRightRadius="L"
            onClick={handleCreateColumn}
          >
            +
          </Button>
        </Box>
      </Box>
    );
  }
  const { title, id, data, color, handleMoveTask } = props;

  return (
    <Box
      m="M"
      p="M"
      pb="0"
      mb="0"
      display="flex"
      maxWidth="18rem"
      minWidth="18rem"
      flexDirection="column"
    >
      <Box display="flex" alignItems="center">
        <Box
          mr="L"
          as="span"
          bg={color}
          width="1rem"
          height="1rem"
          borderRadius="L"
          display="inline-block"
        />
        <Typography variant="normal">{title}</Typography>
      </Box>
      <Box
        mt="M"
        pb="L"
        flex="1"
        overflowY="hidden"
        scrollbarWidth="thin"
        onDragOver={(e) => e.preventDefault()}
        nHover={{
          overflowY: 'auto',
        }}
        onDrop={() => sessionStorage.setItem('column.id', id)}
      >
        {data.map(({ uuid, name, labels }) => (
          <ColumnTask
            key={uuid}
            name={name}
            labels={labels}
            onMoveTask={handleMoveTask(uuid)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Column;
