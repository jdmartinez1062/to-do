import idAble from "./idAble";
import { appendToContent } from "./DOM";

const tabCreation = () => {
  const navigation = document.createElement("nav");
  navigation.id = "project-navigation";
  const tabList = document.createElement("ul");
  tabList.id = "project-nav-list";
  const index = document.createElement("a");
  const defaultProject = document.createElement("a");
  defaultProject.textContent = JSON.parse(
    localStorage.getItem("defaultProject")
  ).title;

  index.textContent = "Project index";
  defaultProject.textContent = "Default";

  const info = [index, defaultProject];
  let list;

  for (let i = 0; i < info.length; i += 1) {
    list = document.createElement("li");
    info[i].id = idAble(info[i].textContent);
    list.appendChild(info[i]);
    tabList.append(list);
  }

  info[0].addEventListener(click, projectIndex);

  navigation.appendChild(tabList);
  return navigation;
};

const tabUpdate = (project, deleteP = false) => {
  if (!deleteP) {
    const navigation = document.getElementById("project-navigation");
    const tabList = document.getElementById("project-nav-list");
    const pName = document.createElement("a");

    pName.textContent = project.title;
    const pList = document.createElement("li");
    pList.id = idAble("li " + project.id);

    pList.addEventListener("click", () => {
      appendToContent(project);
    });
    console.log(pList);
    console.log(tabList);
    pList.appendChild(pName);
    tabList.appendChild(pList);
    navigation.appendChild(tabList);
  } else {
    const projectD = document.getElementById(project.id);
    projectD.remove;
  }
};

export { tabCreation, tabUpdate };
