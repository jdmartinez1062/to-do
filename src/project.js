const Project = (id, title, description, toDo = []) => {
  return {
    id,
    title,
    description,
    toDo,
  };
};

export default Project;
