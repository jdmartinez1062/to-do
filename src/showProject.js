import idAble from "./idAble";
import showToDo from "./showToDo";
const showProject = (element) => {
  const mainDiv = document.getElementById("main-div");
  mainDiv.classList.add('column')
  const titleP = document.createElement("h2");
  const descriptionP = document.createElement("p");
  let array = [];

  localStorage.setItem("actual-project", JSON.stringify(element));

  titleP.textContent = `Project title: ${element.title}`;
  descriptionP.textContent = `Description: ${element.description}`;

  mainDiv.append(titleP, descriptionP);
  element.toDo.forEach((element) => {
    const elementDiv = document.createElement("div");
    elementDiv.classList.add('notification', 'box', 'mr-2')
    elementDiv.setAttribute(
      "id",
      idAble(`${element.title} + ' ' + ${element.id}`)
    );
    let description = document.createElement("p");
    let title = document.createElement("p");

    title.textContent = `${element.title}`;
    description.textContent = `${element.description}`;
    elementDiv.append(title, description);

    // elementDiv.addEventListener("click", () => {
      array = showToDo(element);
      elementDiv.append(...array);
    // });
      if (elementDiv.innerText.includes('high')) {
        elementDiv.classList.toggle('is-danger')
      } else if (elementDiv.innerText.includes('medium')) {
        elementDiv.classList.toggle('is-warning')
      } else {
        elementDiv.classList.toggle('is-primary')
      }
    mainDiv.append(elementDiv);
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
