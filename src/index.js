import { v4 as uuidv4 } from 'uuid';
import ToDo from './to-do-object';
import Project from './project';
import CheckList from './checkListObject';
import { deletePreviousContent, tabCreation } from './DOM';
import { showProject } from './showProject';


import form from './form';


const projectIndex = () => {
  const indexHolder = document.createElement('div');
  indexHolder.id = 'index-holder';
  const projects = JSON.parse(localStorage.getItem('Projects'));
  const main = document.getElementById('main-div');
  for (let i = 0; i < projects.length; i += 1) {
    const projectTitle = document.createElement('a');
    projectTitle.classList.add('box', 'm-5', 'p-5', 'notification', 'is-info');
    projectTitle.id = projects[i].id;
    projectTitle.textContent = projects[i].title;
    projectTitle.addEventListener('click', () => {
      deletePreviousContent(main);
      showProject(projects[i]);
    });
    indexHolder.append(projectTitle);
  }

  deletePreviousContent(main);
  main.append(indexHolder);
};

const init = () => {
  const navbar = document.getElementById('navbar');
  const content = document.getElementById('content');
  const body = document.getElementById('main');
  const sidebar = document.createElement('div');
  const mainDiv = document.createElement('div');
  const formButton = document.createElement('input');

  body.append(navbar);
  navbar.append(formButton);
  navbar.classList.add('navbar', 'is-fixed-top');
  formButton.id = 'form-button';
  formButton.type = 'submit';
  formButton.value = 'New Project';
  formButton.classList.add('button', 'is-primary', 'is-fullwidth');
  formButton.addEventListener('click', form);

  sidebar.setAttribute('id', 'sidebar');
  sidebar.classList.add('column', 'is-2');
  mainDiv.setAttribute('id', 'main-div');
  content.append(sidebar);
  content.append(mainDiv);
  sidebar.appendChild(tabCreation());

  const defaultProject = JSON.parse(localStorage.getItem('Projects'))[0];

  showProject(defaultProject);
};


window.onload = () => {
  // eslint-disable-next-line no-unused-vars
  let defaultProject = Project(
    uuidv4(),
    'default',
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
        false,
      ),
    ],
  );

  const projects = JSON.parse(localStorage.getItem('Projects')) || [];
  defaultProject = projects ? (projects[0] = defaultProject) : [defaultProject];

  localStorage.setItem('Projects', JSON.stringify(projects));
  init();
};
export default projectIndex;
