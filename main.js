/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// CONCATENATED MODULE: ./src/to-do-object.js
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

/* harmony default export */ const to_do_object = (ToDo);

;// CONCATENATED MODULE: ./src/project.js
const Project = (title, description, toDo = []) => {
  return {
    id,
    title,
    description,
    toDo,
  };
};

/* harmony default export */ const project = (Project);

;// CONCATENATED MODULE: ./src/idAble.js
const idAble_idAble = (element) => {
  return element.split('\s+(?=[A-Z])').join('-').toLowerCase()
};

/* harmony default export */ const src_idAble = (idAble_idAble);

;// CONCATENATED MODULE: ./src/tab.js



const tabCreation = () => {
  const navigation = document.createElement("nav");
  const tabList = document.createElement("ul");
  const index = document.createElement("a");
  const defaultProject = document.createElement("a");

  index.textContent = "Project index";
  defaultProject.textContent = "Default";

  const info = [index, defaultProject];
  let list;

  for (let i = 0; i < info.length; i += 1) {
    list = document.createElement("li");
    info[i].id = src_idAble(info[i].textContent);
    list.appendChild(info[i]);
    tabList.append(list);
  }

  navigation.appendChild(tabList);
  return navigation;
};

const tab_tabUpdate = (project, deleteP = false) => {
  if (!deleteP) {
    const navigation = document.getElementsByTagName("nav");
    const tabList = document.getElementsByTagName("ul");
    const pName = document.createElement("a");

    pName.textContent = project.title;
    pList = document.createElement("li");
    pList.id = idAble("li " + project.id);
    document
      .getElementById("li " + project.id)
      .addEventListener("click", () => {
        appendToContent(project);
      });

    pList.appendChild(pName);
    tabList.appendChild(pList);
    navigation.appendChild(pList);
  } else {
    const projectD = document.getElementById(project.id);
    projectD.remove;
  }
};



;// CONCATENATED MODULE: ./src/DOM.js


const init = () => {
  const content = document.getElementById("content");
  const sidebar = document.createElement("div");
  const mainDiv = document.createElement("div");

  sidebar.setAttribute("id", "sidebar");
  mainDiv.setAttribute("id", "main-div");
  content.appendChild(sidebar);
  content.appendChild(mainDiv);
  sidebar.appendChild(tabCreation());
  const defaultProject = JSON.parse(localStorage.getItem("defaultProject"));
  showProject(defaultProject);
};

const DOM_appendToContent = (object) => {
  deletePreviousContent(document.getElementById("main-div"));
  showProject(JSON.parse(localStorage.getItem(`${object.id}`)));
};

const appendToTab = (object) => {
  tabUpdate(JSON.parse(localStorage.getItem(`${object.id}`)));
};

const deletePreviousContent = (parent) => {
  while (parent.lastChild) {
    parent.removeChild(parent.lastChild);
  }
};


;// CONCATENATED MODULE: ./src/index.js




window.onload = () => {
  const defaultProject = new project(
    "default",
    "All project are show here",
    new to_do_object(
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy90by1kby1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9pZEFibGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdGFiLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL0RPTS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1EQUFlLElBQUksRUFBQzs7O0FDYnBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOENBQWUsT0FBTyxFQUFDOzs7QUNUdkIsTUFBTSxhQUFNO0FBQ1o7QUFDQTs7QUFFQSxpREFBZSxhQUFNLEVBQUM7OztBQ0pRO0FBQ1U7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQSxpQkFBaUIsVUFBTTtBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLE1BQU0sYUFBUztBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRWtDOzs7QUNsRGE7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFdBQVc7QUFDakM7QUFDQTtBQUNBOztBQUVBLE1BQU0sbUJBQWU7QUFDckI7QUFDQSxpREFBaUQsVUFBVTtBQUMzRDs7QUFFQTtBQUNBLCtDQUErQyxVQUFVO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDcUU7OztBQzlCbkM7QUFDRjtBQUNjOztBQUU5QztBQUNBLDZCQUE2QixPQUFPO0FBQ3BDO0FBQ0E7QUFDQSxRQUFRLFlBQUk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSxJQUFJO0FBQ047QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRvRG8gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMsIGNoZWNrTGlzdCA9IFtdKSA9PiB7XG4gIHJldHVybiB7XG4gICAgaWQsXG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZHVlRGF0ZSxcbiAgICBzdGFydERhdGUsXG4gICAgcHJpb3JpdHksXG4gICAgbm90ZXMsXG4gICAgY2hlY2tMaXN0LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9EbztcbiIsImNvbnN0IFByb2plY3QgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCB0b0RvID0gW10pID0+IHtcbiAgcmV0dXJuIHtcbiAgICBpZCxcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICB0b0RvLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDtcbiIsImNvbnN0IGlkQWJsZSA9IChlbGVtZW50KSA9PiB7XG4gIHJldHVybiBlbGVtZW50LnNwbGl0KCdcXHMrKD89W0EtWl0pJykuam9pbignLScpLnRvTG93ZXJDYXNlKClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGlkQWJsZTtcbiIsImltcG9ydCBpZEFibGUgZnJvbSBcIi4vaWRBYmxlXCI7XG5pbXBvcnQgeyBhcHBlbmRUb0NvbnRlbnQgfSBmcm9tIFwiLi9ET01cIjtcblxuY29uc3QgdGFiQ3JlYXRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IG5hdmlnYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICBjb25zdCB0YWJMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBjb25zdCBpbmRleCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXG4gIGluZGV4LnRleHRDb250ZW50ID0gXCJQcm9qZWN0IGluZGV4XCI7XG4gIGRlZmF1bHRQcm9qZWN0LnRleHRDb250ZW50ID0gXCJEZWZhdWx0XCI7XG5cbiAgY29uc3QgaW5mbyA9IFtpbmRleCwgZGVmYXVsdFByb2plY3RdO1xuICBsZXQgbGlzdDtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGluZm8ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGluZm9baV0uaWQgPSBpZEFibGUoaW5mb1tpXS50ZXh0Q29udGVudCk7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChpbmZvW2ldKTtcbiAgICB0YWJMaXN0LmFwcGVuZChsaXN0KTtcbiAgfVxuXG4gIG5hdmlnYXRpb24uYXBwZW5kQ2hpbGQodGFiTGlzdCk7XG4gIHJldHVybiBuYXZpZ2F0aW9uO1xufTtcblxuY29uc3QgdGFiVXBkYXRlID0gKHByb2plY3QsIGRlbGV0ZVAgPSBmYWxzZSkgPT4ge1xuICBpZiAoIWRlbGV0ZVApIHtcbiAgICBjb25zdCBuYXZpZ2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJuYXZcIik7XG4gICAgY29uc3QgdGFiTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidWxcIik7XG4gICAgY29uc3QgcE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblxuICAgIHBOYW1lLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgICBwTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBwTGlzdC5pZCA9IGlkQWJsZShcImxpIFwiICsgcHJvamVjdC5pZCk7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5nZXRFbGVtZW50QnlJZChcImxpIFwiICsgcHJvamVjdC5pZClcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBhcHBlbmRUb0NvbnRlbnQocHJvamVjdCk7XG4gICAgICB9KTtcblxuICAgIHBMaXN0LmFwcGVuZENoaWxkKHBOYW1lKTtcbiAgICB0YWJMaXN0LmFwcGVuZENoaWxkKHBMaXN0KTtcbiAgICBuYXZpZ2F0aW9uLmFwcGVuZENoaWxkKHBMaXN0KTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBwcm9qZWN0RCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByb2plY3QuaWQpO1xuICAgIHByb2plY3RELnJlbW92ZTtcbiAgfVxufTtcblxuZXhwb3J0IHsgdGFiQ3JlYXRpb24sIHRhYlVwZGF0ZSB9O1xuIiwiaW1wb3J0IHsgdGFiQ3JlYXRpb24sIHRhYlVwZGF0ZSB9IGZyb20gXCIuL3RhYlwiO1xuXG5jb25zdCBpbml0ID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgc2lkZWJhci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNpZGViYXJcIik7XG4gIG1haW5EaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluLWRpdlwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChzaWRlYmFyKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChtYWluRGl2KTtcbiAgc2lkZWJhci5hcHBlbmRDaGlsZCh0YWJDcmVhdGlvbigpKTtcbiAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZGVmYXVsdFByb2plY3RcIikpO1xuICBzaG93UHJvamVjdChkZWZhdWx0UHJvamVjdCk7XG59O1xuXG5jb25zdCBhcHBlbmRUb0NvbnRlbnQgPSAob2JqZWN0KSA9PiB7XG4gIGRlbGV0ZVByZXZpb3VzQ29udGVudChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tZGl2XCIpKTtcbiAgc2hvd1Byb2plY3QoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHtvYmplY3QuaWR9YCkpKTtcbn07XG5cbmNvbnN0IGFwcGVuZFRvVGFiID0gKG9iamVjdCkgPT4ge1xuICB0YWJVcGRhdGUoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHtvYmplY3QuaWR9YCkpKTtcbn07XG5cbmNvbnN0IGRlbGV0ZVByZXZpb3VzQ29udGVudCA9IChwYXJlbnQpID0+IHtcbiAgd2hpbGUgKHBhcmVudC5sYXN0Q2hpbGQpIHtcbiAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50Lmxhc3RDaGlsZCk7XG4gIH1cbn07XG5leHBvcnQgeyBpbml0LCBhcHBlbmRUb0NvbnRlbnQsIGFwcGVuZFRvVGFiLCBkZWxldGVQcmV2aW91c0NvbnRlbnQgfTtcbiIsImltcG9ydCBUb0RvIGZyb20gXCIuL3RvLWRvLW9iamVjdFwiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgaW5pdCwgYXBwZW5kVG9Db250ZW50IH0gZnJvbSBcIi4vRE9NXCI7XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IFByb2plY3QoXG4gICAgXCJkZWZhdWx0XCIsXG4gICAgXCJBbGwgcHJvamVjdCBhcmUgc2hvdyBoZXJlXCIsXG4gICAgbmV3IFRvRG8oXG4gICAgICAodGl0bGUgPSBcIkZpcnN0IFRvZG8gVGl0bGVcIiksXG4gICAgICAoZGVzY3JpcHRpb24gPSBcIkZpcnN0IFRvZG8gRGVzY3JpcHRpb25cIiksXG4gICAgICAoZHVlRGF0ZSA9IFwiMjEtMTItMjAyMFwiKSxcbiAgICAgIChwcmlvcml0eSA9IFwiaGlnaFwiKSxcbiAgICAgIChub3RlcyA9IFwiRmlyc3QgVG9EbyBOb3RlXCIpLFxuICAgICAgKGNoZWNrTGlzdCA9IGZhbHNlKVxuICAgIClcbiAgKTtcblxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImRlZmF1bHRQcm9qZWN0XCIsIEpTT04uc3RyaW5naWZ5KGRlZmF1bHRQcm9qZWN0KSk7XG4gIGluaXQoKTtcbiAgLy8gbG9hZCB0aGUgZGVmYXVsdCBwYWdlXG4gIC8vIHB1dCB0aGUgdGFic1xuICAvLyBhZGQgYmluZGluZyBldmVudHNcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9