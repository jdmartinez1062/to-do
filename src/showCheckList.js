import idAble from "./idAble";


const showCheckList = (toDo, checklist) => {
  let stub;
  const array = [];
  let input;
  let label;

  Object.entries(checklist).forEach((whatever) => {
    const value = whatever[1];

    stub = document.createElement('div');
    input = document.createElement('input');
    label = document.createElement('label');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('id', checklist.id);
    label.textContent = value.title;
    label.append(input);
    stub.append(label);
    console.log(value);
    input.addEventListener('click', (e) => {
      e = e.target;
      console.log(localStorage.getItem("Projects"));
      console.log(e);
      e.statusToggle;
    
    });
    array.push(stub);
  });
  return array;
};

export default showCheckList;