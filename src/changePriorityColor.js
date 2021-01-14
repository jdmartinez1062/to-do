function changePriority(element) {
  if (element.innerText.includes('high')) {
    element.classList.add('is-danger', 'box');
  } else if (element.innerText.includes('medium')) {
    element.classList.add('is-warning', 'box');
  } else {
    element.classList.add('is-primary', 'box');
  }
}

export default changePriority;