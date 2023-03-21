import { v4 } from 'uuid';

import { generateColor } from '../../utils';
import { CardData } from './column.types';

export const COLUMN_MOCK_DATA = [
  {
    uuid: v4(),
    id: 'backlog',
    name: 'Backlog',
    color: generateColor(),
  },
  {
    uuid: v4(),
    id: 'todo',
    name: 'Todo',
    color: generateColor(),
  },
  {
    uuid: v4(),
    id: 'progress',
    name: 'In Progress',
    color: generateColor(),
  },
  {
    uuid: v4(),
    id: 'done',
    name: 'Done',
    color: generateColor(),
  },
];

export const TASK_MOCK_DATA: ReadonlyArray<CardData> = [
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
    status: 'progress',
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
    status: 'todo',
    labels: ['Backend', 'GraphQL'],
  },
  {
    uuid: v4(),
    name: 'Create Storaj structure to support todo list',
    status: 'todo',
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
    status: 'done',
    labels: ['Frontend', 'enhancement'],
  },
  {
    uuid: v4(),
    name: 'Move task with dragging',
    status: 'done',
    labels: ['Frontend', 'functional'],
  },
  {
    uuid: v4(),
    name: 'Scrollable columns instead Scrollable board',
    status: 'done',
    labels: ['Frontend', 'UX'],
  },
  {
    uuid: v4(),
    name: 'Create task',
    status: 'backlog',
    labels: ['Frontend', 'Component', 'Functional'],
  },
  {
    uuid: v4(),
    name: 'Update task',
    status: 'backlog',
    labels: ['Frontend', 'Component', 'Functional'],
  },
  {
    uuid: v4(),
    name: 'Remove task',
    status: 'backlog',
    labels: ['Frontend', 'Component', 'Functional'],
  },
  {
    uuid: v4(),
    name: 'Transform in a PWA',
    status: 'backlog',
    labels: ['Frontend', 'UX', 'Functional'],
  },
];
