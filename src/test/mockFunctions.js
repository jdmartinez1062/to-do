import { v4 as uuidv4 } from 'uuid';
import ToDo from '../to-do-object';
import Project from '../project';
import CheckList from '../checkListObject';
import { findProject, updateLocalStorage } from '../localStorageUpdate';
import { findToDo } from '../DOM';

const mockSaveProject = (element) => {
  if (element != null) {
    const actualProjectIndex = findProject(element, true);
    const projects = JSON.parse(localStorage.getItem('Projects'));
    const holderToDo = document.getElementById('to-do-holder');
    let array = [];
    let arrayChecklist = [];
    let arrayCheck = [];
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
          } else if (element.children[0] && !element.children[0].classList.contains('button')) {
            const checkDiv = element.children;
            for (let k = 0; k < checkDiv.length; k += 1) {
              const checkElement = checkDiv[k].children[0];
              arrayChecklist = checkElement.children[0].value;
              arrayCheck.push(CheckList(uuidv4(), arrayChecklist));
            }
          }
        }
      }
      projects[actualProjectIndex].toDo.push(ToDo(uuidv4(), ...array, arrayCheck));
      array = [];
      arrayCheck = [];
    }
    localStorage.setItem('Projects', JSON.stringify(projects));
  } else {
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
    localStorage.setItem('Projects', JSON.stringify(projects));
  }
};

const mockEditToDo = (element) => {
  const actualP = findProject(element, true);
  const projects = JSON.parse(localStorage.getItem('Projects'));
  projects.splice(actualP, 1);
  projects.push(element);
  localStorage.setItem('Projects', JSON.stringify(projects));
};

const mockDeleteToDo = (element, toDo) => {
  const toDoIndex = findToDo(element, toDo, true);
  element.toDo.splice(toDoIndex, 1);
  updateLocalStorage(element);
};

const mockCreateToDo = (element, toDo) => {
  element.toDo.push(toDo);
  updateLocalStorage(element);
};

const mockStatusChange = (project, toDo, checkList) => {
  for (let i = 0; i < project.toDo.length; i += 1) {
    if (project.toDo[i].id === toDo.id) {
      const actualToDo = project.toDo[i];
      for (let j = 0; j < actualToDo.checkList.length; j += 1) {
        if (actualToDo.checkList[j].id === checkList.id) {
          let actualCheckList = actualToDo.checkList[j];
          actualCheckList = actualToDo.checkList[j];
          actualCheckList.status = !actualCheckList.status;
          updateLocalStorage(project);
          actualCheckList.status = !actualCheckList.status;
        }
      }
    }
  }
};

export {
  mockSaveProject,
  mockEditToDo,
  mockDeleteToDo,
  mockCreateToDo,
  mockStatusChange,
};