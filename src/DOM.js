import { v4 as uuidv4 } from 'uuid';
import { findProject } from './localStorageUpdate';
import showToDo from './showToDo';
import changePriority from './changePriorityColor';
import addLabel from './addLabel';
import CheckList from './checkListObject';
import ToDo from './to-do-object';
import Project from './project';


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


const checkToDo = (holder) => {
  const pCheckTitle = document.createElement('input');
  pCheckTitle.placeholder = 'Title for the Check-ToDo.';
  pCheckTitle.classList.add('input', 'is-small', 'is-primary');
  const pCheckTitleL = document.createElement('label');
  pCheckTitleL.classList.add('label', 'is-small', 'is-primary', 'my-4');
  const holdCheck = document.createElement('div');
  holdCheck.classList.add('is-flex', 'center');
  const closeButton = document.createElement('span');
  const checkId = uuidv4();
  holdCheck.id = checkId;

  closeButton.style.cursor = 'pointer';
  closeButton.classList.add('delete', 'mt-4', 'ml-3');
  closeButton.classList.toggle = 'close';
  closeButton.innerHTML = '&times;';

  pCheckTitle.setAttribute('type', 'text');
  pCheckTitleL.textContent = 'Add a CheckList';

  pCheckTitleL.append(pCheckTitle);
  holdCheck.append(pCheckTitleL, closeButton);
  holder.append(holdCheck);
  closeButton.addEventListener('click', () => {
    document.getElementById(holdCheck.id).remove();
  });
};


const toDoForm = () => {
  const mainForm = document.getElementById('to-do-holder');
  mainForm.classList.add('box');
  mainForm.style.backgroundColor = 'skyblue';
  const formToDo = document.createElement('div');
  formToDo.id = uuidv4();
  formToDo.classList.add('box');
  formToDo.style.position = 'relative';
  const namePriority = uuidv4();

  const pToDoTitle = document.createElement('input');
  pToDoTitle.placeholder = 'Add a title for something you need ToDo in this project.';
  pToDoTitle.classList.add('input', 'is-small', 'is-info');
  const pToDoTitleL = document.createElement('label');
  pToDoTitleL.classList.add('label', 'is-small');

  pToDoTitle.setAttribute('type', 'text');
  pToDoTitleL.textContent = 'ToDo Title';
  pToDoTitleL.appendChild(pToDoTitle);

  const pToDoDescription = document.createElement('textarea');
  pToDoDescription.placeholder = 'Add the description of this ToDo.';
  pToDoDescription.classList.add('textarea', 'is-small', 'is-info');
  pToDoDescription.rows = '5';
  const pToDoDescriptionL = document.createElement('label');
  pToDoDescriptionL.classList.add('label', 'is-small');

  pToDoDescription.setAttribute('type', 'text');
  pToDoDescriptionL.textContent = 'ToDo Description';
  pToDoDescriptionL.appendChild(pToDoDescription);

  const pToDoDueDate = document.createElement('input');
  pToDoDueDate.classList.add('mx-2', 'is-small');
  const pToDoDueDateL = document.createElement('label');
  pToDoDueDateL.classList.add('is-small', 'is-info', 'label');

  pToDoDueDate.setAttribute('type', 'date');
  pToDoDueDateL.textContent = 'ToDo Due Date';
  pToDoDueDateL.appendChild(pToDoDueDate);

  const pToDoPriorityH = document.createElement('input');
  pToDoPriorityH.classList.add('ml-1');
  const pToDoPriorityHL = document.createElement('label');
  pToDoPriorityHL.classList.add('is-small', 'label');

  pToDoPriorityH.setAttribute('type', 'radio');
  pToDoPriorityH.setAttribute('value', 'high');
  pToDoPriorityH.setAttribute('name', `${namePriority}`);
  pToDoPriorityHL.textContent = 'High';
  pToDoPriorityHL.appendChild(pToDoPriorityH);

  const pToDoPriorityM = document.createElement('input');
  pToDoPriorityM.classList.add('ml-1');
  const pToDoPriorityML = document.createElement('label');
  pToDoPriorityML.classList.add('is-small', 'label');

  pToDoPriorityM.setAttribute('type', 'radio');
  pToDoPriorityM.setAttribute('value', 'medium');
  pToDoPriorityM.setAttribute('name', `${namePriority}`);
  pToDoPriorityML.textContent = 'Medium';
  pToDoPriorityML.appendChild(pToDoPriorityM);

  const pToDoPriorityL = document.createElement('input');
  pToDoPriorityL.classList.add('ml-1');
  const pToDoPriorityLL = document.createElement('label');
  pToDoPriorityLL.classList.add('is-small', 'label');

  pToDoPriorityL.setAttribute('type', 'radio');
  pToDoPriorityL.setAttribute('value', 'low');
  pToDoPriorityL.setAttribute('name', `${namePriority}`);
  pToDoPriorityLL.textContent = 'Low';
  pToDoPriorityLL.appendChild(pToDoPriorityL);

  const radioHold = document.createElement('div');
  radioHold.classList.toggle('radio-holder');
  radioHold.classList.add('py-2');
  const radioText = document.createElement('p');
  radioText.classList.add('is-small', 'label');
  radioText.textContent = 'Pick your ToDo level of priority';
  const hold = document.createElement('div');
  hold.append(pToDoPriorityHL, pToDoPriorityML, pToDoPriorityLL);
  radioHold.append(radioText, hold);

  const pToDoNotes = document.createElement('textarea');
  pToDoNotes.placeholder = 'Here you can add some notes for the ToDo.';
  pToDoNotes.classList.add('textarea', 'is-small', 'is-info');
  pToDoNotes.row = '5';
  const pToDoNotesL = document.createElement('label');
  pToDoNotesL.textContent = 'Notes';
  pToDoNotesL.classList.add('label', 'is-small', 'is-info');

  pToDoNotesL.append(pToDoNotes);

  const checkToDoHolder = document.createElement('div');
  const addCheckTodo = document.createElement('input');
  addCheckTodo.classList.add('is-link', 'button');
  addCheckTodo.type = 'submit';
  addCheckTodo.value = 'Add Check-ToDo (List of things you need to accomplish to finish the ToDo).';
  addCheckTodo.addEventListener('click', () => {
    checkToDo(checkToDoHolder);
  });

  const closeButton = document.createElement('span');
  closeButton.style.position = 'absolute';
  closeButton.style.top = '10px';
  closeButton.style.right = '10px';
  closeButton.classList.add('delete');
  closeButton.style.cursor = 'pointer';
  closeButton.classList.toggle = 'close';
  closeButton.innerHTML = '&times;';

  formToDo.append(
    pToDoTitleL,
    pToDoDescriptionL,
    pToDoDueDateL,
    radioHold,
    pToDoNotesL,
    closeButton,
    addCheckTodo,
    checkToDoHolder,
  );
  mainForm.append(formToDo);
  closeButton.addEventListener('click', () => {
    deleteContent(formToDo);
  });
};


const saveProject = () => {
  const projectTitle = document.getElementById('pTitle').value;
  const projectDescription = document.getElementById('pDescription').value;
  const holderToDo = document.getElementById('to-do-holder');
  let array = [];
  let arrayChecklist = [];
  let arrayCheck = [];
  const arrayToDo = [];
  let priorityBoolean = false;

  for (let i = 0; i < holderToDo.children.length; i += 1) {
    const toDoDiv = holderToDo.children[i].children;
    for (let j = 0; j < toDoDiv.length; j += 1) {
      const element = toDoDiv[j];
      if (element.tagName === 'LABEL') {
        array.push(element.children[0].value);
      } else if (element.tagName === 'DIV') {
        if (element.classList.contains('radio-holder')) {
          const radio = element.children[1].children;
          for (let u = 0; u < radio.length; u += 1) {
            const radioInput = radio[u].children[0];
            if (radioInput.checked) {
              array.push(radioInput.value);
              priorityBoolean = true;
            }
          }
          if (!priorityBoolean) {
            array.push('medium');
          }
          priorityBoolean = false;
        } else {
          const checkDiv = element.children;
          for (let k = 0; k < checkDiv.length; k += 1) {
            const checkElement = checkDiv[k].children[0];
            arrayChecklist = checkElement.children[0].value;
            arrayCheck.push(CheckList(uuidv4(), arrayChecklist));
          }
        }
      }
    }
    arrayToDo.push(ToDo(uuidv4(), ...array, arrayCheck));
    array = [];
    arrayCheck = [];
  }

  const projects = JSON.parse(localStorage.getItem('Projects'));
  const pholder = Project(
    uuidv4(),
    projectTitle,
    projectDescription,
    arrayToDo,
  );
  projects.push(pholder);
  appendToTab(pholder);
  localStorage.setItem('Projects', JSON.stringify(projects));
};


const form = () => {
  const main = document.getElementById('main-div');
  const mainForm = document.createElement('div');
  const submitB = document.createElement('input');
  const formB = document.createElement('div');
  formB.classList.toggle('formProject');
  main.classList.add('is-flex', 'is-flex-direction-column', 'column', 'is-9');
  const toDoHolder = document.createElement('div');
  toDoHolder.style.position = 'relative';
  toDoHolder.id = 'to-do-holder';
  mainForm.id = 'main-form';

  submitB.type = 'submit';
  submitB.value = 'Create new Project';
  submitB.classList.add('button', 'is-success', 'is-align-self-center');
  const holdProject = document.createElement('div');
  const pTitle = document.createElement('input');
  pTitle.classList.add('input');
  pTitle.placeholder = 'Add a title for your new project.';
  const pTitleL = document.createElement('label');
  pTitleL.classList.add('label');
  pTitle.setAttribute('type', 'text');
  pTitle.id = 'pTitle';
  pTitleL.textContent = 'Title';
  pTitleL.appendChild(pTitle);

  const pDescription = document.createElement('textarea');
  pDescription.placeholder = 'Add a description of your new project.';
  pDescription.rows = '5';
  pDescription.classList.add('textarea');
  const pDescriptionL = document.createElement('label');
  pDescriptionL.classList.add('label');
  pDescription.setAttribute('type', 'text');
  pDescription.id = 'pDescription';
  pDescriptionL.textContent = 'Description';
  pDescriptionL.appendChild(pDescription);

  const h2Project = document.createElement('h2');
  h2Project.textContent = 'Project Info';

  const addToDo = document.createElement('input');
  addToDo.type = 'submit';
  addToDo.value = 'Add New ToDo';
  addToDo.classList.add('button', 'is-link', 'is-light', 'is-outlined', 'my-4');
  addToDo.addEventListener('click', toDoForm);

  formB.append(h2Project);
  holdProject.append(h2Project, pTitleL, pDescriptionL, toDoHolder);
  mainForm.append(holdProject, addToDo);
  main.append(mainForm, submitB);

  submitB.addEventListener('click', () => {
    saveProject();
    deleteContent(mainForm);
  });
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
