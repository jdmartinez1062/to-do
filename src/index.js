import { v4 as uuidv4 } from 'uuid';
import ToDo from './to-do-object';
import Project from './project';
import CheckList from './checkListObject';
import { init } from './DOM';

window.onload = () => {
  // eslint-disable-next-line no-unused-vars
  let defaultProject = Project(
    uuidv4(),
    'Default Project',
    'All project are show here',
    [
      ToDo(
        uuidv4(),
        'First Todo',
        'First Todo Description',
        '21-12-2020',
        'high',
        'First ToDo Note',
        [
          CheckList(uuidv4(), 'first checklist', false),
          CheckList(uuidv4(), 'second checklist', true),
        ],
      ),
      ToDo(
        uuidv4(),
        'Second Todo',
        'Second Todo Description',
        '21-12-2020',
        'high',
        'First ToDo Note',
      ),
    ],
  );

  const projects = JSON.parse(localStorage.getItem('Projects')) || [];
  defaultProject = projects ? (projects[0] = defaultProject) : [defaultProject];

  localStorage.setItem('Projects', JSON.stringify(projects));
  init();
};
