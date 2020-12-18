import { tabCreation, tabUpdate } from "./tab";
import form from "./form";
import showProjectF from "./showProject";
const init = () => {
  const content = document.getElementById("content");
  const sidebar = document.createElement("div");
  const mainDiv = document.createElement("div");
  const formButton = document.createElement("input");

  formButton.id = "from-button";
  formButton.type = "submit";

  formButton.addEventListener("click", form);

  sidebar.setAttribute("id", "sidebar");
  mainDiv.setAttribute("id", "main-div");
  content.appendChild(sidebar);
  content.append(formButton, mainDiv);
  sidebar.appendChild(tabCreation());
  const defaultProject = JSON.parse(localStorage.getItem("defaultProject"));
  console.log("show");
  showProjectF(defaultProject);
};

const appendToContent = (object) => {
  deletePreviousContent(document.getElementById("main-div"));
  showProject(JSON.parse(localStorage.getItem(`${object.id}`)));
};

const appendToTab = (object) => {
  tabUpdate(JSON.parse(localStorage.getItem(`${object.id}`)));
};

const deletePreviousContent = (parent) => {
  while (parent.lastChild) {
    parent.removeChild(parent.lastChild);
  }
};

const deleteContent = (content) => {
  document.getElementById(content.id).remove();
};

export {
  init,
  appendToContent,
  appendToTab,
  deletePreviousContent,
  deleteContent,
};
