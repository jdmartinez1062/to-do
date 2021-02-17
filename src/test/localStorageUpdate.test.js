import { updateLocalStorage, findProject } from '../localStorageUpdate';

import ToDo from '../to-do-object';
import Project from '../project';
import CheckList from '../checkListObject';

describe('updateLocalStorage and findProject should receive and find an item element and changes that item in the localStorage ', () => {
  const testProject = Project(
    1,
    'Default Project',
    'All project are show here',
    [
      ToDo(
        2,
        'First Todo',
        'First Todo Description',
        '21-12-2020',
        'high',
        'First ToDo Note',
        [
          CheckList(3, 'first checklist', false),
          CheckList(4, 'second checklist', true),
        ],
      ),
      ToDo(
        5,
        'Second Todo',
        'Second Todo Description',
        '21-12-2020',
        'high',
        'First ToDo Note',
      ),
    ],
  );

  const projects = [testProject];
  localStorage.setItem('Projects', JSON.stringify(projects));

  test('Expect findProject to get the right project from local storage with a project object.', () => {
    const changedProject = findProject(testProject);
    expect(testProject.id).toBe(changedProject.id);
  });

  test('Expect findProject to return the right index of the project in localStorage.', () => {
    const changedProject = findProject(testProject, true);
    expect(0).toBe(changedProject);
  });

  test('Expect localStorage to change id value', () => {
    testProject.title = 'This has Changed';
    updateLocalStorage(testProject);
    const changedProject = findProject(testProject);
    expect(changedProject.title).toBe('This has Changed');
  });
});