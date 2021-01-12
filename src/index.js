import ToDo from "./to-do-object";
import Project from "./project";
import CheckList from "./checkListObject";
import { init, appendToContent, deletePreviousContent } from "./DOM";
import { v4 as uuidv4, v4 } from "uuid";
import { showProject } from "./showProject";
window.onload = () => {
  let defaultProject = Project(
    uuidv4(),
    "default",
    "All project are show here",
    [
      ToDo(
        uuidv4(),
        "First Todo",
        "First Todo Description",
        "21-12-2020",
        "high",
        "First ToDo Note",
        [
          CheckList(uuidv4(), "first checklist", false),
          CheckList(uuidv4(), "second checklist", true),
        ]
      ),
      ToDo(
        uuidv4(),
        "Second Todo",
        "Second Todo Description",
        "21-12-2020",
        "high",
        "First ToDo Note",
        false
      ),
    ]
  );

  const projects = JSON.parse(localStorage.getItem("Projects")) || [];
  defaultProject = projects ? (projects[0] = defaultProject) : [defaultProject];

  localStorage.setItem("Projects", JSON.stringify(projects));
  init();
  // load the default page
  // put the tabs
  // add binding events
};

const projectIndex = () => {
  const indexHolder = document.createElement("div");
  indexHolder.id = "index-holder";
  const projects = JSON.parse(localStorage.getItem("Projects"));
  const main = document.getElementById("main-div");
  console.log(projects.length);
  for (let i = 0; i < projects.length; i += 1) {
    const projectTitle = document.createElement("a");
    projectTitle.id = projects[i].id;
    projectTitle.textContent = projects[i].title;
    console.log(projects[i].title);
    projectTitle.addEventListener("click", () => {
      deletePreviousContent(main);
      showProject(projects[i]);
    });
    indexHolder.append(projectTitle);
  }

  deletePreviousContent(main);
  console.log(indexHolder.children);
  main.append(indexHolder);
};
export default projectIndex;
