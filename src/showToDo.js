import idAble from "./idAble";
import showCheckList from "./showCheckList";

const showToDo = (toDo) => {
  const array = [];

  Object.entries(toDo).forEach((whatever) => {
    const value = whatever[1];
    const element = whatever[0];

    if (toDo.hasOwnProperty(element)) {
      if (element == "checkList") {
        const stub = document.createElement("div");
        stub.append(...showCheckList(toDo, value));
        array.push(stub);
      } else if (
        element != "title" &&
        element != "id" &&
        element != "description"
      ) {
        const stub = document.createElement("p");
        stub.className += ` ${idAble(element)}`;
        stub.textContent = value;
        array.push(stub);
      }
    }
  });
  return array;
};

export default showToDo;
