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
        stub.classList.add('center', 'is-flex', 'is-flex-direction-column');
        stub.append(...showCheckList(toDo, value));
        array.push(stub);
      } else if (element == "dueDate") {
        const stub = document.createElement("span");
        let differenceDate = (new Date(toDo.startDate).getTime() - new Date(toDo.dueDate).getTime())/ (1000 * 3600 * 24);
        if (differenceDate < 0) {
          stub.innerText = `You have ${Math.abs(differenceDate)} days to finish this project!`
          stub.style.position = 'absolute';
          stub.style.top = '10px';
          stub.style.right = '10px';
        } else { 
          stub.innerText = `This project was supposed to be already done!`
          stub.style.position = 'absolute';
          stub.style.top = '10px';
          stub.style.right = '10px';
        }
        array.push(stub);
      } else if (element != "title" && element != "id" && element != "description" && element != "startDate") {
        const stub = document.createElement("p");
        stub.className += `${idAble(element)}`;
        stub.textContent = value;
        array.push(stub);
      } 
    }
  });
  return array;
};

export default showToDo;
