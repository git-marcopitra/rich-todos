import { v4 } from 'uuid';

export const COLUMN_MOCK_DATA = [
  {
    uuid: v4(),
    name: 'Sidebar',
    status: 'done',
    labels: ['UI', 'Layout', 'Component'],
  },
  {
    uuid: v4(),
    name: 'Task Card',
    status: 'done',
    labels: ['UI', 'Component'],
  },
  {
    uuid: v4(),
    name: 'Column Style',
    status: 'todo',
    labels: ['UI', 'Layout'],
  },
  {
    uuid: v4(),
    name: 'Header Style',
    status: 'todo',
    labels: ['UI', 'Layout'],
  },
  {
    uuid: v4(),
    name: 'Replace window.crypto to uuid',
    status: 'done',
    labels: ['Functional', 'dependency'],
  },
  {
    uuid: v4(),
    name: 'Add support to Active sidebar item',
    status: 'progress',
    labels: ['Functional', 'dependency'],
  },
];
