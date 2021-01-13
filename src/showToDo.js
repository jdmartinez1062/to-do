import idAble from "./idAble";
import showCheckList from "./showCheckList";
import { formatDistance } from "date-fns";

const showToDo = (toDo) => {
  const array = [];

  Object.entries(toDo).forEach((whatever) => {
    const value = whatever[1];
    const element = whatever[0];
    
    if (toDo.hasOwnProperty(element)) {
      console.log(element);
      if (element == "checkList") {
        const stub = document.createElement("div");
        stub.append(...showCheckList(toDo, value));
        array.push(stub);
      } else if (element == "dueDate") {
        const stub = document.createElement("p");
        stub.innerText = (new Date(toDo.startDate).getTime() - new Date(toDo.dueDate).getTime())/ (1000 * 3600 * 24);
        array.push(stub);
      } else if (element != "title" && element != "id" && element != "description" && element != "startDate") {
        const stub = document.createElement("p");
        stub.className += ` ${idAble(element)}`;
        stub.textContent = value;
        array.push(stub);
      } 
    }
  });
  console.log(array);
  return array;
};

export default showToDo;
