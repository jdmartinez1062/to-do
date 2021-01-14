function addLabel(element) {
  for (let i = 0; i < element.children.length; i += 1) {
    if (element.children[i].classList.contains('priority')) {
      const holder = element.children[i].innerText;
      element.children[i].innerText = `Priority: ${holder}`;
    } else if (element.children[i].classList.contains('notes')) {
      element.children[i].classList.add('center');
    }
  }
}

export default addLabel;