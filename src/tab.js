import idAble from "./idAble";

const tabCreation = () => {
  const navigation = document.createElement("nav");
  const tabList = document.createElement("ul");
  const index = document.createElement("a");
  const defaultProject = document.createElement("a");

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

  navigation.appendChild(tabList);
  return navigation
};

const tabUpdate = (project, deleteP = false) => {
  if (!deleteP) {
    const navigation = document.getElementsByTagName("nav");
    const tabList = document.getElementsByTagName("ul");
    const pName = document.createElement("a");

    pName.textContent = project.title;
    pList = document.createElement("li");
    pName.id = idAble(pName.textContent);
    pList.appendChild(pName);
    tabList.appendChild(pList);
    navigation.appendChild(pList);
  } else {
    const projectD = document.getElementById(
      idAble(project.title)
    );
    projectD.remove;
    // localStorage.removeItem("Project" + project.id);
  }
};

export { tabCreation, tabUpdate };
