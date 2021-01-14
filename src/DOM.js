import { findProject } from './localStorageUpdate';
import form from './form';
import showToDo from './showToDo';
import changePriority from './changePriorityColor';
import addLabel from './addLabel';

const deletePreviousContent = (parent) => {
  while (parent.lastChild) {
    parent.removeChild(parent.lastChild);
  }
};


const findToDo = (project, toDo) => {
  project = findProject(project);
  for (let i = 0; i < project.toDo.length; i += 1) {
    if (project.toDo[i].id === toDo.id) {
      return project.toDo[i];
    }
  }
  return -1;
};

const deleteTab = (project) => {
  const projectD = document.getElementById(project.id);
  projectD.remove();
};


const showProject = (element) => {
  const mainDiv = document.getElementById('main-div');
  mainDiv.classList.add('column');
  const titleP = document.createElement('h2');
  const descriptionP = document.createElement('p');
  const deleteThisProject = document.createElement('input');
  deleteThisProject.type = 'submit';
  deleteThisProject.classList = 'button is-danger';
  deleteThisProject.value = 'Delete this project';
  deleteThisProject.addEventListener('click', () => {
    deleteTab(findProject(element));
    const actualP = findProject(element, true);
    const projects = JSON.parse(localStorage.getItem('Projects'));
    projects.splice(actualP, 1);
    localStorage.setItem('Projects', JSON.stringify(projects));
    deletePreviousContent(mainDiv);
    const warning = document.createElement('h1');
    warning.textContent = 'Select a project from project index or the nav';
    warning.classList.add('notification');
    mainDiv.append(warning);
  });
  let array = [];

  localStorage.setItem('actual-project', JSON.stringify(element));

  titleP.textContent = `Project title: ${element.title}`;
  descriptionP.textContent = `Description: ${element.description}`;

  const expand = document.createElement('div');
  const checkListTitle = document.createElement('h4');
  checkListTitle.textContent = 'Checklists';
  expand.appendChild(checkListTitle);
  expand.classList.add('do-detail');
  const toDoTitle = document.createElement('h3');
  toDoTitle.textContent = 'To Do list';
  const toDoMain = document.createElement('div');
  mainDiv.append(titleP, descriptionP);
  toDoMain.append(toDoTitle);
  element.toDo.forEach((children) => {
    const elementDiv = document.createElement('div');

    elementDiv.classList.add('notification', 'box', 'mr-2', 'is-warning');
    elementDiv.style.position = 'relative';
    elementDiv.setAttribute('id', children.id);

    const description = document.createElement('p');
    const title = document.createElement('p');
    title.style.cursor = 'pointer';
    title.style.textDecoration = 'underline';

    title.textContent = children.title;
    description.textContent = children.description;
    elementDiv.appendChild(title);
    elementDiv.appendChild(description);

    title.addEventListener('click', () => {
      children = findToDo(element, children);
      array = showToDo(children);
      if (elementDiv.children.length < 3 && expand.children.length < 3) {
        expand.append(...array);
        expand.classList.add('notification');
        addLabel(expand);
        changePriority(expand);
        elementDiv.append(expand);
      } else {
        expand.classList = 'do-detail';
        deletePreviousContent(expand);
        for (let i = 0; i < elementDiv.children.length; i += 1) {
          if (i >= 2) {
            deletePreviousContent(elementDiv.children[i]);
            elementDiv.removeChild(elementDiv.childNodes[i]);
            localStorage.setItem(
              'actual-project',
              JSON.stringify(findProject(element)),
            );
          }
        }
      }
    });
    toDoMain.appendChild(elementDiv);
  });

  mainDiv.append(deleteThisProject, toDoMain);
};


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

const appendToContent = (object) => {
  deletePreviousContent(document.getElementById('main-div'));
  showProject(object);
};

const tabUpdate = (project) => {
  const navigation = document.getElementById('project-navigation');
  const tabList = document.getElementById('project-nav-list');
  const pName = document.createElement('a');

  pName.textContent = project.title;
  const pList = document.createElement('li');
  pList.id = project.id;

  pList.addEventListener('click', () => {
    appendToContent(findProject(project));
  });
  pList.appendChild(pName);
  tabList.appendChild(pList);
  navigation.appendChild(tabList);
};

const tabCreation = () => {
  const navigation = document.createElement('nav');
  navigation.id = 'project-navigation';
  const tabList = document.createElement('ul');
  tabList.id = 'project-nav-list';
  tabList.classList.add('column');
  const projects = JSON.parse(localStorage.getItem('Projects'));

  let list = [];
  const liIndex = document.createElement('li');
  liIndex.id = 'project-index';
  const index = document.createElement('a');
  index.id = 'index';
  index.textContent = 'Project Index';
  index.addEventListener('click', projectIndex);
  liIndex.append(index);
  tabList.append(liIndex);
  for (let i = 0; i < projects.length; i += 1) {
    const link = document.createElement('a');
    list = document.createElement('li');

    list.id = projects[i].id;
    link.textContent = projects[i].title;
    link.addEventListener('click', () => {
      appendToContent(findProject(projects[i]));
    });
    list.appendChild(link);
    tabList.append(list);
  }

  navigation.appendChild(tabList);
  return navigation;
};

const appendToTab = (object) => {
  tabUpdate(object);
};

const deleteContent = (content) => {
  document.getElementById(content.id).remove();
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


export {
  init,
  projectIndex,
  tabCreation,
  tabUpdate,
  appendToContent,
  appendToTab,
  deletePreviousContent,
  deleteContent,
};
