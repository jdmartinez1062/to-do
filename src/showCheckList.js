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
    input.setAttribute('id', idAble(toDo.id + ' check ' + checklist.id));
    label.textContent = value.title;
    label.append(input);
    stub.append(label);
    // input.addEventListener('click', value.toggleStatus())
    array.push(stub);
  });
  return array;
};

export default showCheckList;