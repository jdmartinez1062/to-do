import CheckList from "./checkListObject";
import { v4 as uuidv4 } from "uuid";
import ToDo from "./to-do-object";
import Project from "./project";

const saveProject = (html) => {
  const projectTitle = document.getElementById('pTitle').value
  const projectDescription = document.getElementById('pDescription').value
  const holderToDo = document.getElementById('to-do-holder');
  let array = [];
  let arrayChecklist = [];
  let arrayCheck = [];
  let arrayToDo = [];

  for (let i = 0; i < holderToDo.children.length; i += 1) {
    const toDoDiv = holderToDo.children[i].children;
    for (let j = 0; j < toDoDiv.length; j += 1) {
      const element = toDoDiv[j];
      if (element.tagName == 'LABEL') {
        array.push(element.children[0].value);
      } else if (element.tagName == 'DIV') {
        const checkDiv = element.children[0].children;
        for (let k = 0; k < checkDiv.length; k += 1) {
          arrayChecklist = checkDiv[k].value;
          arrayCheck.push(CheckList(uuidv4(), arrayChecklist));
          arrayCheck = []
        }
      }
    }
  arrayToDo.push(ToDo(uuidv4(), ...array, arrayCheck) )  
  array = [];
  Project(uuidv4(), projectTitle, projectDescription, arrayToDo);
  }
};

export default saveProject;

// prject 
// id,
// title, *
// description, *
// toDo,

// todo
// id,
// title,
// description,
// dueDate,
// priority,
// notes,
// checkList = []