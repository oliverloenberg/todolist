import { format, compareAsc } from "date-fns";
import {
  Project,
  generateProjectId,
  makeNewProject,
  removeProjectItem,
  toggleProjectDone,
  updateProjectIdsInArr,
} from "./projects";
import {
  renderNewProject,
  getProjectTitleInput,
  getProjectDescriptionInput,
  getProjectDuedateInput,
  addTodo,
  renderNewTodo,
  expandTodo,
  toggleAddProjectForm,
  clearProjectForm,
  toggleAddTodoForm,
  clearTodoForm,
  addCheckListItem,
  removeItemRender,
  updateProjectIdsInTheDom,
  countAmountOfItems,
  toggleCheckBoxStatus,
} from "./domManipulation.js";
import { Todo } from "./todos";
import { CheckListItem } from "./checklistItem";

//console.log(defaultProject.todos());

const createDefaultEventListeners = () => {
  const mainContainer = document.querySelector("main");

  mainContainer.addEventListener("click", (event) =>
    actionBasedOnClickedElement(event)
  );

  //console.log(mainContainer);
};

createDefaultEventListeners();

const actionBasedOnClickedElement = (event) => {
  const grandParent = event.target.parentElement.parentElement;
  const parent = event.target.parentElement;
  //console.log("Parent: " + parent);
  const parentSibling = event.target.parentElement.nextElementSibling;

  const projectCnt = document.querySelector(".projects-container");
  const todoCnt = document.querySelector(".todos-container");
  console.log(parentSibling);
  console.log(event.target);

  switch (event.target.id || event.target.className) {
    case "project-add-btn":
      toggleAddProjectForm();
      break;

    case "confirm-new-project":
      console.log("Project btn pressed!");
      //Render the new project and gives us the project ID that was created with it
      //const projectId = renderNewProject();
      //console.log("Project ID: " + projectId);

      //Generate Project ID
      const projectId = generateProjectId(projectArr);
      //console.log("Project Id Test: " + projectIdTest);

      //Lets get the input the user filled out and put it in the project when it gets pushed to the project array
      const title = getProjectTitleInput();
      console.log("Here is the title for the new project: " + title);
      const description = getProjectDescriptionInput();
      console.log(
        "Here is the description for the new project: " + description
      );
      const dueDate = getProjectDuedateInput();
      console.log("Here is the duedate for the new project: " + dueDate);
      //Create the project with the data gathered and push it to the project array

      if (title.length > 0) {
        renderNewProject();
        const newProject = makeNewProject(
          title,
          description,
          dueDate,
          projectId
        );

        addProjectToArr(newProject);
        console.log(projectArr);
        //Close down the form
        toggleAddProjectForm();
        //Clear the form input fields for good measure
        clearProjectForm();
      } else {
        alert("Please add a title to the project");
      }

      break;

    case "project-form-close":
    case "project-bar1":
    case "project-bar3":
      //console.log("Close btn pushed!");
      toggleAddProjectForm();
      clearProjectForm();

      break;

    case "project-delete-container":
    case "project-delete-icon":
      //Remove the correct project item in the project array and the dom, depending on whether user clicked on the actual delete icon or its container, and update the id in the project array and the dom.
      let projectItemIdStr = "";
      let projectIdNum = "";
      if (event.target.className == "project-delete-container") {
        projectItemIdStr = event.target.parentElement.id;
        console.log(projectItemIdStr);
        //projectIdNum = projectItemIdStr.slice(projectItemIdStr.length - 2);
        //console.log("Here is the project Id num:" + projectIdNum);
        console.log(
          "Here is the project ID cnt: " + Number.parseInt(projectIdNum)
        );
        removeProjectItem(projectArr, Number.parseInt(projectIdNum));
        removeItemRender(event);
      } else if (event.target.className == "project-delete-icon") {
        projectItemIdStr = grandParent.id;
        console.log("The whole id" + projectItemIdStr);
        projectIdNum = projectItemIdStr.slice(projectItemIdStr.length - 1);
        console.log(
          "Here is the project Id num:" + Number.parseInt(projectIdNum)
        );
        removeProjectItem(projectArr, Number.parseInt(projectIdNum));
        removeItemRender(event);
      }
      //Update the project ids in the array.
      updateProjectIdsInArr(projectArr);
      //Update the project ids in the DOM.
      updateProjectIdsInTheDom();
      break;

    case "project-checkbox-container":
    case "project-checkbox-icon":
      if (event.target.className == "project-checkbox-container") {
        const checkBoxCntProjectIdStr = parent.id;
        const checkBoxCntProjectIdNum = checkBoxCntProjectIdStr.slice(
          checkBoxCntProjectIdStr.length - 1
        );
        toggleProjectDone(projectArr, checkBoxCntProjectIdNum);
        toggleCheckBoxStatus(parent);
      } else if (event.target.className == "project-checkbox-icon") {
        const checkBoxIconProjectIdStr = grandParent.id;
        console.log("Checkbox Icon IdStr: " + checkBoxIconProjectIdStr);
        const checkBoxIconProjectIdNum = checkBoxIconProjectIdStr.slice(
          checkBoxIconProjectIdStr.length - 1
        );
        toggleProjectDone(projectArr, checkBoxIconProjectIdNum);
        toggleCheckBoxStatus(grandParent);
      }

      break;

    case "todo-checklist-checkbox-icon":
    case "todo-checklist-checkbox-container":
      if (event.target.className == "todo-checklist-checkbox-container") {
        toggleCheckBoxStatus(parent);
      } else if (event.target.className == "todo-checklist-checkbox-icon") {
        console.log(grandParent);
        toggleCheckBoxStatus(grandParent);
      }
      break;

    case "todo-add-btn":
      toggleAddTodoForm();

      break;

    case "confirm-new-todo":
      addTodo();
      toggleAddTodoForm();
      clearTodoForm();
      console.log("Add todo clicked!");

      break;

    case "todo-form-close":
    case "todo-bar1":
    case "todo-bar3":
      console.log("Close btn pushed!");
      clearTodoForm();
      toggleAddTodoForm();

      break;

    case "form-add-checklist-item-btn-container":
    case "form-add-checklist-item-btn":
    case "add-checklist-item-btn-container":
    case "add-checklist-item-btn":
      addCheckListItem(event);
      break;

    case "todo-delete-container":
    case "todo-checklist-delete-container":
    case "todo-delete-icon":
    case "todo-checklist-delete-icon":
      console.log("Hey delete was clicked!");
      //removeTodoItem(todoId);
      removeItemRender(event);

      break;

    case "expand":
    case "expand-icon":
      console.log("Hey expand got clicked");
      expandTodo(parentSibling);
      //switchExpandIcon();
      break;

    default:
      break;
  }
};

//Create Project array
const projectArr = [];

//Initiate defaultProject
const defaultProject = new Project(
  "Default",
  "Add a description!",
  "2021-07-21",
  1
);

/* //Show the default project
renderNewProject(
  defaultProject.title,
  defaultProject.description,
  defaultProject.dueDate
); */

//Add it to the project array
projectArr.push(defaultProject);

const addProjectToArr = (project) => {
  projectArr.push(project);
};

//Create defaultTodo
const defaultTodo = new Todo(
  "Do the washing",
  "Remember to check for plecters",
  "2021-10-21",
  "1st",
  "These are my awesome notes"
);

//Add it to the default project
defaultProject.addTodoToProject(defaultTodo);

//console.log(projectArr);

console.log(defaultProject);

//Create a defaultCheckListItem
const defaultCheckListItem = new CheckListItem("Check temp", false);

console.log(defaultCheckListItem);

//Add it to the default Todo
defaultTodo.addChecklistToTodo(defaultCheckListItem);
defaultTodo.isDone = true;

console.log(defaultTodo);

console.log(defaultProject);

defaultCheckListItem.isDone = true;

console.log(defaultProject);
console.log(defaultProject.title);
console.log(defaultProject.projectId);

//defaultProject.title = "Home stuff changed";

//console.log(defaultProject.title);

//console.log();
