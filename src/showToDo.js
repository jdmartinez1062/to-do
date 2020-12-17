import idAble from "./idAble";
import showCheckList from "./showCheckList";

const showToDo = (toDo) => {
  const array = [];
  let stub;
  p.textContent = toDo.description;
  toDo.forEach(element, (value) => {
    if (toDo.hasOwnProperty(element)) {
      if (element == "checklist") {
        stub.append(...showCheckList(toDo, value));
        array.push(stub);
      } else if (element != "title") {
        stub = document.createElement("p");
        stub.className += ` ${idAble(element)}`;
        stub.textContent(value);
        array.push(stub);
      }
    }
  });
  return array;
};

export default showToDo;
