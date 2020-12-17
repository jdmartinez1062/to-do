const ToDo = (title, description, dueDate, priority, notes, checkList = []) => {
  return {
    id,
    title,
    description,
    dueDate,
    startDate,
    priority,
    notes,
    checkList,
  };
};

export default ToDo;
