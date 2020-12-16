import idAble from "./idAble";

const showCheckList = (toDo, value) => {
  let stub;
  const array = [];
  let input;
  let label;
  value.forEach(key, content => {
    stub = document.createElement('div');
    input = document.createElement('input');
    label = document.createElement('label');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('id', idAble(toDo.id + ' check ' + value.id));
    label.textContent(content.title);
    input.appendChild(label);
    stub.appendChild(input);
    input.addEventListener('click', content.toggleStatus())
    array.push(stub);
  });
  return array;
};

export default showCheckList;