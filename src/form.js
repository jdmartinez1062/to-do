import { v4 as uuidv4 } from "uuid";
import { saveProject } from "./createObject";

const form = () => {
  const main = document.getElementById("main-div");
  const mainForm = document.createElement("div");
  const submitB = document.createElement("input");
  const formB = document.createElement("div");
  formB.classList.toggle("formProject");
  const toDoHolder = document.createElement("div");
  toDoHolder.id = "to-do-holder";
  mainForm.id = "main-form";

  submitB.type = "submit";
  submitB.value = "Create new Project";
  const holdProject = document.createElement("div");
  const pTitle = document.createElement("input");
  const pTitleL = document.createElement("label");
  pTitle.setAttribute("type", "text");
  pTitle.id = "pTitle";
  pTitleL.textContent = "Title";
  pTitleL.appendChild(pTitle);

  const pDescription = document.createElement("input");
  const pDescriptionL = document.createElement("label");
  pDescription.setAttribute("type", "text");
  pDescription.id = "pDescription";
  pDescriptionL.textContent = "Description";
  pDescriptionL.appendChild(pDescription);

  const h2Project = document.createElement("h2");
  h2Project.textContent = "Project Info";

  const addToDo = document.createElement("input");
  addToDo.type = "submit";
  addToDo.value = "add new ToDo";
  addToDo.addEventListener("click", toDoForm);

  formB.append(h2Project);
  holdProject.append(h2Project, pTitleL, pDescriptionL, toDoHolder);
  mainForm.append(holdProject, addToDo);
  main.append(mainForm, submitB);

  submitB.addEventListener("click", () => {
    saveProject(formB);
  });
};

const toDoForm = () => {
  const mainForm = document.getElementById("to-do-holder");
  const formToDo = document.createElement("div");
  const holdToDo = document.createElement("div");

  const pToDoTitle = document.createElement("input");
  const pToDoTitleL = document.createElement("label");

  pToDoTitle.setAttribute("type", "text");
  pToDoTitleL.textContent = "Title";
  pToDoTitleL.appendChild(pToDoTitle);

  const pToDoDescription = document.createElement("input");
  const pToDoDescriptionL = document.createElement("label");

  pToDoDescription.setAttribute("type", "text");
  pToDoDescriptionL.textContent = "Description";
  pToDoDescriptionL.appendChild(pToDoDescription);

  const pToDoDueDate = document.createElement("input");
  const pToDoDueDateL = document.createElement("label");

  pToDoDueDate.setAttribute("type", "date");
  pToDoDueDateL.textContent = "Due Date";
  pToDoDueDateL.appendChild(pToDoDueDate);

  const pToDoPriorityH = document.createElement("input");
  const pToDoPriorityHL = document.createElement("label");

  pToDoPriorityH.setAttribute("type", "radio");
  pToDoPriorityH.setAttribute("name", "priority");
  pToDoPriorityHL.textContent = "High";
  pToDoPriorityHL.appendChild(pToDoPriorityH);

  const pToDoPriorityM = document.createElement("input");
  const pToDoPriorityML = document.createElement("label");

  pToDoPriorityM.setAttribute("type", "radio");
  pToDoPriorityM.setAttribute("name", "priority");
  pToDoPriorityML.textContent = "Medium";
  pToDoPriorityML.appendChild(pToDoPriorityM);

  const pToDoPriorityL = document.createElement("input");
  const pToDoPriorityLL = document.createElement("label");

  pToDoPriorityL.setAttribute("type", "radio");
  pToDoPriorityL.setAttribute("name", "priority");
  pToDoPriorityLL.textContent = "Low";
  pToDoPriorityLL.appendChild(pToDoPriorityL);

  const radioHold = document.createElement("div");
  const radioText = document.createElement("p");
  radioText.textContent = "Pick your ToDo level of priority";
  const hold = document.createElement("div");
  hold.classList.toggle("radio-holder");
  hold.append(pToDoPriorityHL, pToDoPriorityML, pToDoPriorityLL);
  radioHold.append(radioText, hold);

  const pToDoNotes = document.createElement("input");
  const pToDoNotesL = document.createElement("label");
  pToDoNotesL.textContent = "Notes";

  pToDoNotes.append(pToDoNotesL);

  holdToDo.append(pToDoTitleL, pToDoDescriptionL, pToDoDueDateL, radioHold);
  formToDo.append(holdToDo);
  mainForm.append(formToDo);

  const addCheckTodo = document.createElement("button");
  addCheckTodo.addEventListener("click", checkToDo);

  const closeButton = document.createElement("span");
  closeButton.classList.toggle = "close";
  closeButton.innerHTML = "&times;";
  closeButton.addEventListener("click", () => {
    deleteContent(holdToDo);
  });
};

const checkToDo = () => {
  const mainForm = document.getElementById("main-form");
  const pCheckTitle = document.createElement("input");
  const pCheckTitleL = document.createElement("label");
  pCheckTitle.setAttribute("type", "text");
  pCheckTitleL.textContent = "Add a CheckList";
  pCheckTitle.append(pCheckTitleL);
  mainForm.append(pCheckTitle);
  const closeButton = document.createElement("span");
  closeButton.classList.toggle = "close";
  closeButton.innerHTML = "&times;";

  closeButton.addEventListener("click", () => {
    deleteContent(pCheckTitle);
  });
};

export default form;
