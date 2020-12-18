import ToDo from "./to-do-object";
import Project from "./project";
import CheckList from "./checkListObject";
import { init, appendToContent } from "./DOM";
import { v4 as uuidv4, v4 } from "uuid";
window.onload = () => {
  const defaultProject = Project(
    uuidv4(),
    "default",
    "All project are show here",
    [
      ToDo(
        uuidv4(),
        "First Todo",
        "First Todo Description",
        "21-12-2020",
        "high",
        "First ToDo Note",
        [CheckList()]
      ),
      ToDo(
        uuidv4(),
        "Second Todo",
        "First Todo Description",
        "21-12-2020",
        "high",
        "First ToDo Note",
        false
      ),
    ]
  );

  localStorage.setItem("defaultProject", JSON.stringify(defaultProject));
  init();
  // load the default page
  // put the tabs
  // add binding events
};
