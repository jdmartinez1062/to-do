import { tabCreation, tabUpdate } from "./tab";
import form from "./form";
import { showProject } from "./showProject";
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

  console.log(localStorage.getItem("Projects"));

  const defaultProject = JSON.parse(localStorage.getItem("Projects"))[0];

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
