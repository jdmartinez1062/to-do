import idAble from "./idAble";

const showProject = (element) => {
  const title = document.createElement("h2");
  const description = document.createElement("p");
  const array = [];
  element.ToDo.forEach((element) => {
    const elementDiv = document.createElement("div");
    elementDiv.setAttribute(
      "id",
      idAble(`${element.title} + ' ' + ${element.id}`)
    );
    const title = document.createElement("p");
    title.textContent = element.title;
    elementDiv.appendChild(title);
    elementDiv.addEventListener("click", () => {
      array = showToDo(element);
    });
  });
  const mainDiv = document.getElementById("main-div");
  mainDiv.appendChild(title);
  mainDiv.appendChild(description);
  mainDiv.append(...array);
};

export default showProject;
