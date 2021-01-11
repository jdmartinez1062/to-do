import { tabCreation, tabUpdate } from "./tab";
import form from "./form";
import { showProject } from "./showProject";
const init = () => {
  const navbar = document.getElementById("navbar")
  const content = document.getElementById("content");
  const body = document.getElementById("main")
  const sidebar = document.createElement("div");
  const mainDiv = document.createElement("div");
  const formButton = document.createElement("input");

  body.append(navbar);
  navbar.append(formButton);
  navbar.classList.add('navbar', 'is-fixed-top');
  formButton.id = "form-button";
  formButton.type = "submit";
  formButton.value = 'New Project'
  formButton.classList.add('button', 'is-primary', 'is-fullwidth');
  formButton.addEventListener("click", form);
 
  sidebar.setAttribute("id", "sidebar");
  mainDiv.setAttribute("id", "main-div");
  content.append(sidebar);
  content.append(mainDiv);
  sidebar.appendChild(tabCreation());
  console.log(localStorage.getItem("Projects"));
  const defaultProject = JSON.parse(localStorage.getItem("Projects"));
  showProject(defaultProject);
};

const appendToContent = (object) => {
  deletePreviousContent(document.getElementById("main-div"));
  showProject(object);
};

const appendToTab = (object) => {
  tabUpdate(object);
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
