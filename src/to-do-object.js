ToDo = (title, description, dueDate, priority, notes, checkList) => {
  const changeStatus = (object) => {
    if ((status = object.status)) {
      status = true;
    } else {
      status = false;
    }
  };

  return {
    title,
    description,
    dueDate,
    priority,
    notes,
    checkList,
    changeStatus,
  };
};

export default ToDo;
