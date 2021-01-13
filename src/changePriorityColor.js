

function changePriority(element) {
  if (element.innerText.includes('high')) {
    element.classList.toggle('is-danger')
  } else if (element.innerText.includes('medium')) {
    element.classList.toggle('is-warning')
  } else {
    element.classList.toggle('is-primary')
  } 
}

export default changePriority