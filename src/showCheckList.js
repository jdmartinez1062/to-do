import idAble from "./idAble";
import { updateLocalStorage } from "./localStorageUpdate";
import CheckList from "./checkListObject";

const showCheckList = (toDo, checklist) => {
  let stub;
  const array = [];
  let input;
  let label;

  const project = JSON.parse(localStorage.getItem("actual-project"));

  Object.entries(checklist).forEach((whatever) => {
    const value = whatever[1];

    stub = document.createElement("div");
    input = document.createElement("input");
    label = document.createElement("label");
    input.checked = value.status;
    input.setAttribute("type", "checkbox");
    input.setAttribute("id", value.id);
    input.dataset.checklist = value.id;
    input.dataset.toDo = toDo.id;
    label.textContent = value.title;
    label.append(input);
    stub.append(label);
    input.addEventListener("click", (e) => {
      e = e.target;
      for (let i = 0; i < project.toDo.length; i += 1) {
        if (project.toDo[i].id == e.dataset.toDo) {
          const actualToDo = project.toDo[i];
          for (let j = 0; j < actualToDo.checkList.length; j += 1) {
            if (actualToDo.checkList[j].id == e.id) {
              let actualCheckList = actualToDo.checkList[j];

              actualCheckList = actualToDo.checkList[j];

              actualCheckList.status = actualCheckList.status ? false : true;
              updateLocalStorage(project);
            }
          }
        }
      }
    });
    array.push(stub);
  });
  return array;
};

export default showCheckList;
