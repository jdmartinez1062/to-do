import { showProject } from './showProject';
import { findProject } from './localStorageUpdate';
import projectIndex from './index';

const deletePreviousContent = (parent) => {
  while (parent.lastChild) {
    parent.removeChild(parent.lastChild);
  }
};

const appendToContent = (object) => {
  deletePreviousContent(document.getElementById('main-div'));
  showProject(object);
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

const tabUpdate = (project, deleteP = false) => {
  if (!deleteP) {
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
  } else {
    const projectD = document.getElementById(project.id);
    projectD.remove();
  }
};

const appendToTab = (object) => {
  tabUpdate(object);
};

const deleteContent = (content) => {
  document.getElementById(content.id).remove();
};

export {
  tabCreation,
  tabUpdate,
  appendToContent,
  appendToTab,
  deletePreviousContent,
  deleteContent,
};
