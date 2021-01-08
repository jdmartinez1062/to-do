const updateLocalStorage = (element) => {
  const projects = JSON.parse(localStorage.getItem("Projects"));
  for (let i = 0; i < projects.length; i += 1) {
    if (projects[i].id == element.id) {
      projects[i] = element;
    }
  }
  localStorage.setItem("Projects", JSON.stringify(projects));
};
const findProject = (project) => {
  const local = JSON.parse(localStorage.getItem("Projects"));
  for (let i = 0; i < local.length; i += 1) {
    if (local[i].id == project.id) {
      return local[i];
    }
  }
};
export { updateLocalStorage, findProject };
