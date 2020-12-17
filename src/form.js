import { v4 as uuidv4 } from "uuid";

const form = () => {
  const main = document.getElementById("main-div");
  const formB = document.createElement("div");

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

  const pToDoTitle = document.createElement("input");
  const pToDoTitleL = document.createElement("label");

  pToDoTitle.setAttribute("type", "text");
  pToDoTitle.id = "pToDoTitle";
  pToDoTitleL.textContent = "Title";
  pToDoTitle.appendChild(pToDoTitleL);

  const pToDoDescription = document.createElement("input");
  const pToDoDescriptionL = document.createElement("label");

  pToDoDescription.setAttribute("type", "text");
  pToDoDescription.id = "pToDoDescription";
  pToDoDescriptionL.textContent = "Description";
  pToDoDescription.appendChild(pToDoDescriptionL);

  const pToDoDueDate = document.createElement("input");
  const pToDoDueDate = document.createElement("label");

  pToDoDueDate.setAttribute("type", "date");
  pToDoDueDate.id = "pToDoDueDate";
  pToDoDueDateL.textContent = "Due Date";
  pToDoDueDate.appendChild(pToDodueDateL);

  const pToDoPriorityH = document.createElement("input");
  const pToDoPriorityHL = document.createElement("label");

  pToDoPriorityH.setAttribute("type", "radio");
  pToDoPriorityH.id = "pToDoPriorityH";
  pToDoPriorityHL.textContent = "High";
  pToDoPriorityH.appendChild(pToDoDescriptionHL);

  const pToDoPriorityM = document.createElement("input");
  const pToDoPriorityML = document.createElement("label");

  pToDoPriorityM.setAttribute("type", "radio");
  pToDoPriorityM.id = "pToDoPriorityM";
  pToDoPriorityML.textContent = "Medium";
  pToDoPriorityM.appendChild(pToDoDescriptionML);

  const pToDoPriorityL = document.createElement("input");
  const pToDoPriorityLL = document.createElement("label");

  pToDoPriorityL.setAttribute("type", "radio");
  pToDoPriorityL.id = "pToDoPriorityL";
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

  const pCheckTitle = document.createElement("input");
  const pCheckTitleL = document.createElement("label");
  const submitB = document.createElement("input");
};
