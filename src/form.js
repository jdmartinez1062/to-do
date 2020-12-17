import { v4 as uuidv4 } from "uuid";

const form = () => {
  const main = document.getElementById("main-div");
  const mainForm = document.createElement('div');
  const submitB = document.createElement("input");
  const formB = document.createElement("div");
  formB.classList.toggle('formProject');
  mainForm.id = 'main-form';

  const holdProject = document.createElement('div');
  const pTitle = document.createElement("input");
  const pTitleL = document.createElement("label");
  pTitle.setAttribute("type", "text");
  pTitle.id = "pTitle";
  pTitleL.textContent = "Title";
  pTitle.appendChild(pTitleL);

  const pDescription = document.createElement("input");
  const pDescriptionL = document.createElement("label");
  pDescription.setAttribute("type", "text");
  pDescription.id = "pDescription";
  pDescriptionL.textContent = "Description";
  pDescription.appendChild(pDescriptionL);

  const h2Project = createElement('h2');
  h2Project.textContent = 'Project Info';

  const addToDo = document.createElement('button');
  addToDo.addEventListener('click', toDoForm);

  holdProject.append(h2Project, pTitle, pDescription);
  formB.append(h2Project);
  mainForm.append(formB);
  main.append(mainForm, submitB);  

  submitB.addEventListener('click', () => {
    saveProject(formB);
  })
};

const toDoForm = () => {
  const mainForm = document.getElementById('main-form');
  const formToDo = document.createElement("div");
  const holdToDo = document.createElement('div');

  const pToDoTitle = document.createElement("input");
  const pToDoTitleL = document.createElement("label");

  pToDoTitle.setAttribute("type", "text");
  pToDoTitleL.textContent = "Title";
  pToDoTitle.appendChild(pToDoTitleL);

  const pToDoDescription = document.createElement("input");
  const pToDoDescriptionL = document.createElement("label");

  pToDoDescription.setAttribute("type", "text");
  pToDoDescriptionL.textContent = "Description";
  pToDoDescription.appendChild(pToDoDescriptionL);

  const pToDoDueDate = document.createElement("input");
  const pToDoDueDate = document.createElement("label");

  pToDoDueDate.setAttribute("type", "date");
  pToDoDueDateL.textContent = "Due Date";
  pToDoDueDate.appendChild(pToDodueDateL);

  const pToDoPriorityH = document.createElement("input");
  const pToDoPriorityHL = document.createElement("label");

  pToDoPriorityH.setAttribute("type", "radio");
  pToDoPriorityHL.textContent = "High";
  pToDoPriorityH.appendChild(pToDoDescriptionHL);

  const pToDoPriorityM = document.createElement("input");
  const pToDoPriorityML = document.createElement("label");

  pToDoPriorityM.setAttribute("type", "radio");
  pToDoPriorityML.textContent = "Medium";
  pToDoPriorityM.appendChild(pToDoDescriptionML);

  const pToDoPriorityL = document.createElement("input");
  const pToDoPriorityLL = document.createElement("label");

  pToDoPriorityL.setAttribute("type", "radio");
  pToDoPriorityLL.textContent = "Low";
  pToDoPriorityL.appendChild(pToDoDescriptionLL);

  const radioHold = document.createElement("div");
  const radioText = document.createElement("p");
  radioText.textContent = "Pick your ToDo level of priority";
  const hold = document.createElement("div");
  hold.classList.toggle("radio-holder");
  hold.append(pToDoPriorityH, pToDoPriorityM, pToDoPriorityL);
  radioHold.append(radioText, hold);

  const pToDoNotes = document.createElement("input");
  const pToDoNotesL = document.createElement("label");
  pToDoNotesL.textContent = 'Notes';

  pToDoNotes.append(pToDoNotesL);

  holdToDo.append(pToDoTitle, pDescription, pToDoDueDate, radioHold)
  formToDo.append(holdToDo);
  mainForm.append(formToDo);

  const addCheckTodo = document.createElement('button');
  addCheckTodo.addEventListener('click', checkToDo);

  const closeButton = document.createElement('span');
  closeButton.classList.toggle = 'close';
  closeButton.innerHTML = '&times;';
  closeButton.addEventListener('click', () => {
    deleteContent(holdToDo);
  }
}

const checkToDo = () => {
  const mainForm = document.getElementById('main-form');
  const pCheckTitle = document.createElement("input");
  const pCheckTitleL = document.createElement("label");
  pCheckTitle.setAttribute('type', 'text');
  pCheckTitleL.textContent = 'Add a CheckList';
  pCheckTitle.append(pCheckTitleL);
  mainForm.append(pCheckTitle);
  const closeButton = document.createElement('span');
  closeButton.classList.toggle = 'close';
  closeButton.innerHTML = '&times;';

  closeButton.addEventListener('click', () => {
    deleteContent(pCheckTitle);
  }
 
}

  
