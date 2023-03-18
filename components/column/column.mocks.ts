import { v4 } from 'uuid';

export const COLUMN_MOCK_DATA = [
  {
    uuid: v4(),
    name: 'Sidebar',
    status: 'done',
    labels: ['Frontend', 'Layout', 'Component'],
  },
  {
    uuid: v4(),
    name: 'Task Card',
    status: 'done',
    labels: ['Frontend', 'Component'],
  },
  {
    uuid: v4(),
    name: 'Column Style',
    status: 'todo',
    labels: ['Frontend', 'Layout'],
  },
  {
    uuid: v4(),
    name: 'Header Style',
    status: 'done',
    labels: ['Frontend', 'Layout'],
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
    status: 'done',
    labels: ['Functional', 'dependency'],
  },
  {
    uuid: v4(),
    name: 'Add assignee to cards',
    status: 'backlog',
    labels: ['Frontend', 'Element'],
  },
  {
    uuid: v4(),
    name: 'Add priority to cards',
    status: 'backlog',
    labels: ['Frontend', 'Element'],
  },
  {
    uuid: v4(),
    name: 'Add predefined labels',
    status: 'backlog',
    labels: ['Frontend', 'component'],
  },
  {
    uuid: v4(),
    name: 'Manage data from a GraphQL server',
    status: 'backlog',
    labels: ['Backend', 'GraphQL'],
  },
  {
    uuid: v4(),
    name: 'Create Storaj structure to support todo list',
    status: 'backlog',
    labels: ['Backend', 'Storaj'],
  },
  {
    uuid: v4(),
    name: 'Add Light theme',
    status: 'backlog',
    labels: ['Frontend', 'Theming'],
  },
  {
    uuid: v4(),
    name: 'Task Filter',
    status: 'backlog',
    labels: ['Frontend', 'Functional'],
  },
  {
    uuid: v4(),
    name: 'Fix scroll',
    status: 'done',
    labels: ['Frontend', 'bugfix'],
  },
  {
    uuid: v4(),
    name: 'Improve scroll + scrollbars',
    status: 'backlog',
    labels: ['Frontend', 'enhancement'],
  },
  {
    uuid: v4(),
    name: 'Move task with dragging',
    status: 'todo',
    labels: ['Frontend', 'functional'],
  },
];
