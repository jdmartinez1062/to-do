import idAble from "./idAble";

const showProject = (element) => {
  const mainDiv = document.getElementById("main-div");
  const titleP = document.createElement("h2");
  const descriptionP = document.createElement("p");
  const array = [];

  titleP.textContent = element.title;
  descriptionP.textContent = element.description;

  mainDiv.append(titleP, descriptionP);
  element.toDo.forEach((element) => {
    const elementDiv = document.createElement("div");

    elementDiv.setAttribute(
      "id",
      idAble(`${element.title} + ' ' + ${element.id}`)
    );
    let description = document.createElement("p");
    let title = document.createElement("p");

    title.textContent = element.title;
    description.textContent = element.description;
    elementDiv.appendChild(title);

    elementDiv.addEventListener("click", () => {
      array = showToDo(element);
    });

    mainDiv.appendChild(title);
    mainDiv.appendChild(description);
  });

  mainDiv.append(...array);
};

const findProject = (array, project) => {
  for (let i = 0; i < array.lenght; i += 1) {
    if (array[i].id == project) {
      return array[i];
    }
  }
};
export { showProject, findProject };
