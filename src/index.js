import ToDo from "./to-do-object";
import Project from "./project";
import { init, appendToContent } from "./DOM";

window.onload = () => {
  const defaultProject = new Project(
    "default",
    "All project are show here",
    new ToDo(
      (title = "First Todo Title"),
      (description = "First Todo Description"),
      (dueDate = "21-12-2020"),
      (priority = "high"),
      (notes = "First ToDo Note"),
      (checkList = false)
    )
  );

  localStorage.setItem("defaultProject", JSON.stringify(defaultProject));
  init();
  // load the default page
  // put the tabs
  // add binding events
};
