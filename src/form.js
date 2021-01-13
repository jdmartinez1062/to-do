import { v4 as uuidv4 } from "uuid";
import saveProject from "./createObject";
import { deleteContent } from "./DOM";

const form = () => {
  const main = document.getElementById("main-div");
  const mainForm = document.createElement("div");
  const submitB = document.createElement("input");
  const formB = document.createElement("div");
  formB.classList.toggle("formProject");
  main.classList.add('is-flex', 'is-flex-direction-column', 'column', 'is-9')
  const toDoHolder = document.createElement("div");
  toDoHolder.style.position = 'relative';
  toDoHolder.id = "to-do-holder";
  mainForm.id = "main-form";

  submitB.type = "submit";
  submitB.value = "Create new Project";
  submitB.classList.add('button', 'is-success', 'is-align-self-center');
  const holdProject = document.createElement("div");
  const pTitle = document.createElement("input");
  pTitle.classList.add('input');
  pTitle.placeholder = 'Add a title for your new project.';
  const pTitleL = document.createElement("label");
  pTitleL.classList.add('label');
  pTitle.setAttribute("type", "text");
  pTitle.id = "pTitle";
  pTitleL.textContent = "Title";
  pTitleL.appendChild(pTitle);

  const pDescription = document.createElement("textarea");
  pDescription.placeholder = 'Add a description of your new project.';
  pDescription.rows = "5";
  pDescription.classList.add('textarea');
  const pDescriptionL = document.createElement("label");
  pDescriptionL.classList.add('label');
  pDescription.setAttribute("type", "text");
  pDescription.id = "pDescription";
  pDescriptionL.textContent = "Description";
  pDescriptionL.appendChild(pDescription);

  const h2Project = document.createElement("h2");
  h2Project.textContent = "Project Info";

  const addToDo = document.createElement("input");
  addToDo.type = "submit";
  addToDo.value = "Add New ToDo";
  addToDo.classList.add('button', 'is-link', 'is-light', 'is-outlined', 'my-4')
  addToDo.addEventListener("click", toDoForm);

  formB.append(h2Project);
  holdProject.append(h2Project, pTitleL, pDescriptionL, toDoHolder);
  mainForm.append(holdProject, addToDo);
  main.append(mainForm, submitB);

  submitB.addEventListener("click", () => {
    saveProject();
    deleteContent(mainForm);
  });
};

const toDoForm = () => {
  const mainForm = document.getElementById("to-do-holder");
  mainForm.classList.add('box');
  mainForm.style.backgroundColor = 'skyblue';
  const formToDo = document.createElement("div");
  formToDo.id = uuidv4();
  formToDo.classList.add('box');
  formToDo.style.position = 'relative';
  const namePriority = uuidv4();

  const pToDoTitle = document.createElement("input");
  pToDoTitle.placeholder = 'Add a title for something you need ToDo in this project.'
  pToDoTitle.classList.add('input', 'is-small', 'is-info');
  const pToDoTitleL = document.createElement("label");
  pToDoTitleL.classList.add('label', 'is-small');

  pToDoTitle.setAttribute("type", "text");
  pToDoTitleL.textContent = "ToDo Title";
  pToDoTitleL.appendChild(pToDoTitle);

  const pToDoDescription = document.createElement("textarea");
  pToDoDescription.placeholder = 'Add the description of this ToDo.'
  pToDoDescription.classList.add('textarea', 'is-small', 'is-info');
  pToDoDescription.rows = "5";
  const pToDoDescriptionL = document.createElement("label");
  pToDoDescriptionL.classList.add('label', 'is-small');

  pToDoDescription.setAttribute("type", "text");
  pToDoDescriptionL.textContent = "ToDo Description";
  pToDoDescriptionL.appendChild(pToDoDescription);

  const pToDoDueDate = document.createElement("input");
  pToDoDueDate.classList.add('mx-2', 'is-small');
  const pToDoDueDateL = document.createElement("label");
  pToDoDueDateL.classList.add('is-small', 'is-info', 'label');

  pToDoDueDate.setAttribute("type", "date");
  pToDoDueDateL.textContent = "ToDo Due Date";
  pToDoDueDateL.appendChild(pToDoDueDate);

  const pToDoPriorityH = document.createElement("input");
  pToDoPriorityH.classList.add('ml-1')
  const pToDoPriorityHL = document.createElement("label");
  pToDoPriorityHL.classList.add('is-small', 'label')

  pToDoPriorityH.setAttribute("type", "radio");
  pToDoPriorityH.setAttribute("value", "high");
  pToDoPriorityH.setAttribute("name", `${namePriority}`);
  pToDoPriorityHL.textContent = "High";
  pToDoPriorityHL.appendChild(pToDoPriorityH);

  const pToDoPriorityM = document.createElement("input");
  pToDoPriorityM.classList.add('ml-1')
  const pToDoPriorityML = document.createElement("label");
  pToDoPriorityML.classList.add('is-small', 'label')

  pToDoPriorityM.setAttribute("type", "radio");
  pToDoPriorityM.setAttribute("value", "medium");
  pToDoPriorityM.setAttribute("name", `${namePriority}`);
  pToDoPriorityML.textContent = "Medium";
  pToDoPriorityML.appendChild(pToDoPriorityM);

  const pToDoPriorityL = document.createElement("input");
  pToDoPriorityL.classList.add('ml-1')
  const pToDoPriorityLL = document.createElement("label");
  pToDoPriorityLL.classList.add('is-small', 'label')

  pToDoPriorityL.setAttribute("type", "radio");
  pToDoPriorityL.setAttribute("value", "low");
  pToDoPriorityL.setAttribute("name", `${namePriority}`);
  pToDoPriorityLL.textContent = "Low";
  pToDoPriorityLL.appendChild(pToDoPriorityL);

  const radioHold = document.createElement("div");
  radioHold.classList.toggle("radio-holder");
  radioHold.classList.add('py-2')
  const radioText = document.createElement("p");
  radioText.classList.add('is-small', 'label')
  radioText.textContent = "Pick your ToDo level of priority";
  const hold = document.createElement("div");
  hold.append(pToDoPriorityHL, pToDoPriorityML, pToDoPriorityLL);
  radioHold.append(radioText, hold);

  const pToDoNotes = document.createElement("textarea");
  pToDoNotes.placeholder = 'Here you can add some notes for the ToDo.'
  pToDoNotes.classList.add('textarea', 'is-small', 'is-info');
  pToDoNotes.row = '5';
  const pToDoNotesL = document.createElement("label");
  pToDoNotesL.textContent = "Notes";
  pToDoNotesL.classList.add('label', 'is-small', 'is-info');

  pToDoNotesL.append(pToDoNotes);

  const checkToDoHolder = document.createElement("div");
  const addCheckTodo = document.createElement("input");
  addCheckTodo.classList.add('is-link', 'button')
  addCheckTodo.type = "submit";
  addCheckTodo.value = "Add Check-ToDo (List of things you need to accomplish to finish the ToDo).";
  addCheckTodo.addEventListener("click", () => {
    checkToDo(checkToDoHolder);
  });

  const closeButton = document.createElement("span");
  closeButton.style.position = 'absolute';
  closeButton.style.top = '10px';
  closeButton.style.right = '10px';
  closeButton.classList.add('delete');
  closeButton.style.cursor = "pointer";
  closeButton.classList.toggle = "close";
  closeButton.innerHTML = "&times;";

  formToDo.append(
    pToDoTitleL,
    pToDoDescriptionL,
    pToDoDueDateL,
    radioHold,
    pToDoNotesL,
    closeButton,
    addCheckTodo,
    checkToDoHolder
  );
  mainForm.append(formToDo);
  closeButton.addEventListener("click", () => {
    deleteContent(formToDo);
  });
};

const checkToDo = (holder) => {
  const pCheckTitle = document.createElement("input");
  pCheckTitle.placeholder = 'Title for the Check-ToDo.'
  pCheckTitle.classList.add('input', 'is-small', 'is-primary');
  const pCheckTitleL = document.createElement("label");
  pCheckTitleL.classList.add('label', 'is-small', 'is-primary', 'my-4');
  const holdCheck = document.createElement("div");
  holdCheck.classList.add('is-flex', 'center')
  const closeButton = document.createElement("span");
  const checkId = uuidv4();
  holdCheck.id = checkId;

  closeButton.style.cursor = 'pointer';
  closeButton.classList.add('delete', 'mt-4', 'ml-3')
  closeButton.classList.toggle = "close";
  closeButton.innerHTML = "&times;";

  pCheckTitle.setAttribute("type", "text");
  pCheckTitleL.textContent = "Add a CheckList";

  pCheckTitleL.append(pCheckTitle);
  holdCheck.append(pCheckTitleL, closeButton);
  holder.append(holdCheck);
  closeButton.addEventListener("click", () => {
    deleteContent(holdCheck);
  });
};

export default form;
