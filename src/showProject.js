import showToDo from "./showToDo";
import { deletePreviousContent } from "./DOM";
import { findProject } from "./localStorageUpdate";
import changePriority from "./changePriorityColor";
import addLabel from "./addLabel";

const showProject = (element) => {
  const mainDiv = document.getElementById("main-div");
  mainDiv.classList.add("column");
  const titleP = document.createElement("h2");
  const descriptionP = document.createElement("p");
  let array = [];

  localStorage.setItem("actual-project", JSON.stringify(element));

  titleP.textContent = `Project title: ${element.title}`;
  descriptionP.textContent = `Description: ${element.description}`;

  const expand = document.createElement("div");
  const checkListTitle = document.createElement("h4");
  checkListTitle.textContent = "Checklists";
  expand.appendChild(checkListTitle);
  expand.classList.add("do-detail");
  const toDoTitle = document.createElement("h3");
  toDoTitle.textContent = "To Do list";
  const toDoMain = document.createElement("div");
  mainDiv.append(titleP, descriptionP);
  toDoMain.append(toDoTitle);
  element.toDo.forEach((children) => {
    const elementDiv = document.createElement("div");

    elementDiv.classList.add("notification", "box", "mr-2", "is-warning");
    elementDiv.style.position = "relative";
    elementDiv.setAttribute("id", children.id);

    let description = document.createElement("p");
    let title = document.createElement("p");
    title.style.cursor = 'pointer';
    title.style.textDecoration = 'underline'

    title.textContent = children.title;
    description.textContent = children.description;
    elementDiv.appendChild(title);
    elementDiv.appendChild(description);

    title.addEventListener("click", () => {
      children = findToDo(element, children);
      array = showToDo(children);
      if (elementDiv.children.length < 3 && expand.children.length < 3) {
        expand.append(...array);
        expand.classList.add('notification');
        addLabel(expand);
        changePriority(expand);
        elementDiv.append(expand);
      } else {
        expand.classList = "do-detail";
        deletePreviousContent(expand);
        for (let i = 0; i < elementDiv.children.length; i += 1) {
          if (i >= 2) {
            deletePreviousContent(elementDiv.children[i]);
            elementDiv.removeChild(elementDiv.childNodes[i]);
            localStorage.setItem(
              "actual-project",
              JSON.stringify(findProject(element))
            );
          }
        }
      } 
    });
    toDoMain.appendChild(elementDiv);
  });

  mainDiv.append(toDoMain);
};
const findToDo = (project, toDo) => {
  project = findProject(project);
  for (let i = 0; i < project.toDo.length; i += 1) {
    if (project.toDo[i].id == toDo.id) {
      return project.toDo[i];
    }
  }
};
export { showProject, findProject };
