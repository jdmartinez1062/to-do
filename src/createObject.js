import CheckList from "./checkListObject";
import { v4 as uuidv4 } from "uuid";
import ToDo from "./to-do-object";
import Project from "./project";
import { appendToContent, appendToTab } from "./DOM";
const saveProject = () => {
  const projectTitle = document.getElementById("pTitle").value;
  const projectDescription = document.getElementById("pDescription").value;
  const holderToDo = document.getElementById("to-do-holder");
  let array = [];
  let arrayChecklist = [];
  let arrayCheck = [];
  let arrayToDo = [];
  let priorityBoolean = false;

  for (let i = 0; i < holderToDo.children.length; i += 1) {
    const toDoDiv = holderToDo.children[i].children;
    for (let j = 0; j < toDoDiv.length; j += 1) {
      const element = toDoDiv[j];
      if (element.tagName == "LABEL") {
        array.push(element.children[0].value);
      } else if (element.tagName == "DIV") {
        if (element.classList.contains("radio-holder")) {
          let radio = element.children[1].children;
          for (let u = 0; u < radio.length; u += 1) {
            const radioInput = radio[u].children[0];
            if (radioInput.checked) {
              array.push(radioInput.value);
              priorityBoolean = true;
            }
          }
          if (!priorityBoolean) {
            array.push("medium");
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

  const projects = JSON.parse(localStorage.getItem("Projects"));
  const pholder = Project(
    uuidv4(),
    projectTitle,
    projectDescription,
    arrayToDo
  );
  projects.push(pholder);
  appendToTab(pholder);
  localStorage.setItem("Projects", JSON.stringify(projects));
};

export default saveProject;
