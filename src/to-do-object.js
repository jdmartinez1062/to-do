import { format } from "date-fns";

const ToDo = (
  id,
  title,
  description,
  dueDate,
  priority,
  notes = "",
  checkList = []
) => {
  return {
    id,
    title,
    description,
    dueDate,
    startDate: format(new Date(), "yyyy-MM-dd"),
    priority,
    notes,
    checkList,
  };
};

export default ToDo;
