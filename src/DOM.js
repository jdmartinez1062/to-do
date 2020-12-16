import { tabCreation } from "./tab";

const appendToContent = () => {
  const content = document.getElementById('content');
  const sidebar = document.createElement('div');
  const mainDiv = document.createElement('div');
  sidebar.setAttribute('id', 'sidebar');
  mainDiv.setAttribute('id', 'main-div');
  content.appendChild(sidebar);
  content.appendChild(mainDiv);
  sidebar.appendChild(tabCreation());
  const defaultProject = JSON.parse(localStorage.getItem('defaultProject'));
  showProject(defaultProject);

};

export default appendToContent;