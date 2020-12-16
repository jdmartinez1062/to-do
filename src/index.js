import ToDo from "./to-do-object";
import Project from "./project";
import appendToContent from "./DOM";

window.onload = () => {
  console.log('hi');
  const defaultProject = new Project('default', 'All project are show here', new ToDo(title = 'First Todo Title', description = 'First Todo Description', dueDate = '21-12-2020', priority = 'high', notes = 'First ToDo Note', checkList = false));
  localStorage.setItem('defaultProject', JSON.stringify(defaultProject));
  appendToContent();
  // load the default page
  // put the tabs
  // add binding events

}