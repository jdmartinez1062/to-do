import showToDo from "./showToDo";
const showProject = (element) => {
  const mainDiv = document.getElementById("main-div");
  const titleP = document.createElement("h2");
  const descriptionP = document.createElement("p");
  let array = [];

  localStorage.setItem("actual-project", JSON.stringify(element));

  titleP.textContent = element.title;
  descriptionP.textContent = element.description;

  const expand = document.createElement("div");
  expand.classList.add("do-detail");

  mainDiv.append(titleP, descriptionP);

  element.toDo.forEach((element) => {
    const elementDiv = document.createElement("div");

    elementDiv.setAttribute("id", element.id);

    let description = document.createElement("p");
    let title = document.createElement("p");

    title.textContent = element.title;
    description.textContent = element.description;
    elementDiv.appendChild(title);
    elementDiv.appendChild(description);

    elementDiv.addEventListener("click", () => {
      array = showToDo(element);
      if (elementDiv.children.length < 3) {
        expand.append(...array);
        elementDiv.append(expand);
      } else {
        for (let i = 0; i < elementDiv.children.length; i += 1) {
          if (i >= 2) {
            elementDiv.removeChild(elementDiv.childNodes[i]);
          }
        }
      }
    });

    mainDiv.appendChild(elementDiv);
  });
};

const findProject = (array, project) => {
  for (let i = 0; i < array.lenght; i += 1) {
    if (array[i].id == project) {
      return array[i];
    }
  }
};
export { showProject, findProject };
