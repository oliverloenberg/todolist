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
  updateProjectDropDown,
  renderNewTodo,
  getTodoTitleInput,
  getTodoDescriptionInput,
  getTodoDueDateInput,
  getTodoPriority,
  getTodoNotes,
  expandTodo,
  toggleVisibleTodos,
  removeProjectTodosFromDom,
  toggleAddProjectForm,
  clearProjectForm,
  toggleAddTodoForm,
  clearTodoForm,
  renderCheckListItem,
  getCheckListItemInput,
  removeItemRender,
  updateProjectIdsInTheDom,
  getSelectedDropdownId,
  countAmountOfItems,
  toggleCheckBoxStatus,
} from "./domManipulation.js";
import { Todo, makeNewTodo, removeTodoItem, toggleTodoIsDone } from "./todos";
import {
  CheckListItem,
  makeNewChecklistItem,
  removeChecklistItem,
  toggleChecklistItemIsDone,
} from "./checklistItem";

//console.log(defaultProject.todos());

const createDefaultEventListeners = () => {
  const mainContainer = document.querySelector("main");

  mainContainer.addEventListener("click", (event) =>
    actionBasedOnClickedElement(event)
  );

  //mainContainer.addEventListener("change", (event) => updateValues(event));

  //console.log(mainContainer);
};

createDefaultEventListeners();

const createProjectEventListeners = () => {
  const projectsCnt = document.querySelector(".projects-container");
  console.log(projectsCnt);
  projectsCnt.addEventListener("change", (event) => updateValues(event));
};

createProjectEventListeners();

const createTodoEventListeners = () => {
  const todoCnt = document.querySelector(".todos-container");
  console.log(todoCnt);
  todoCnt.addEventListener("change", (event) => updateValues(event));
};

createTodoEventListeners();

const actionBasedOnClickedElement = (event) => {
  const grandParent = event.target.parentElement.parentElement;
  const parent = event.target.parentElement;
  //console.log("Parent: " + parent);
  const parentSibling = event.target.parentElement.nextElementSibling;

  const projectCnt = document.querySelector(".projects-container");
  const todoCnt = document.querySelector(".todos-container");
  console.log(parentSibling);
  console.log(event.target);

  const numReg = /\d/g;
  let regResultArr = "";

  switch (event.target.id || event.target.className) {
    //Project
    case "project-add-btn":
      toggleAddProjectForm();
      break;

    case "confirm-new-project":
      console.log("Project btn pressed!");

      //Generate Project ID
      const projectId = uniqueIds.length;
      uniqueIds.push(projectId);

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
        renderNewProject(projectId);
        const newProject = makeNewProject(
          title,
          description,
          dueDate,
          projectId
        );

        addProjectToArr(newProject);
        console.log(projectArr);

        //Lets update the project dropdown
        updateProjectDropDown(projectArr);
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
        projectItemIdStr = parent.id;
      } else if (event.target.className == "project-delete-icon") {
        projectItemIdStr = grandParent.id;
      }

      //Lets get the id number from the id str
      regResultArr = projectItemIdStr.match(numReg);
      projectIdNum = regResultArr.join("");

      console.log("Here is the project Id num:" + projectIdNum);
      removeProjectItem(projectArr, Number.parseInt(projectIdNum));
      removeProjectTodosFromDom(projectIdNum);
      updateProjectDropDown(projectArr);
      const projectToShowId = getSelectedDropdownId();
      if (projectToShowId != null) {
        toggleVisibleTodos(projectToShowId);
      }
      removeItemRender(event);
      console.log(projectArr);
      break;

    case "project-checkbox-container":
    case "project-checkbox-icon":
      let checkBoxCntProjectIdStr = "";
      let checkBoxCntProjectIdNum = "";
      let containerPassed = "";

      if (event.target.className == "project-checkbox-container") {
        checkBoxCntProjectIdStr = parent.id;
        containerPassed = parent;
      } else if (event.target.className == "project-checkbox-icon") {
        checkBoxCntProjectIdStr = grandParent.id;
        containerPassed = grandParent;
        //console.log("Checkbox Icon IdStr: " + checkBoxCntProjectIdStr);
      }

      regResultArr = checkBoxCntProjectIdStr.match(numReg);
      checkBoxCntProjectIdNum = regResultArr.join("");

      toggleProjectDone(projectArr, checkBoxCntProjectIdNum);
      toggleCheckBoxStatus(containerPassed);

      break;

    //Todo
    case "todo-add-btn":
      toggleAddTodoForm();

      break;

    case "confirm-new-todo":
      const todoId = uniqueIds.length;
      uniqueIds.push(todoId);
      renderNewTodo(todoId, getSelectedDropdownId());

      //Gather the input from the user so we can pass them as arguments when creating a new todo
      const todoTitle = getTodoTitleInput();
      const todoDescription = getTodoDescriptionInput();
      const todoDueDate = getTodoDueDateInput();
      const todoPriority = getTodoPriority();
      const todoNotes = getTodoNotes();
      //Also gather the added checklist items
      const checklistItemCnt = document.querySelector(
        ".form-todo-checklist-item-container"
      );
      const checklistitemDomArr = checklistItemCnt.querySelectorAll(
        ".todo-checklist-item"
      );
      const checklistItemArr = [...checklistitemDomArr];

      console.log("Checklist item cnt: " + checklistItemCnt);
      console.log("Checklist dom arr: " + checklistitemDomArr);
      console.log("Checklist item Arr: " + checklistItemArr);

      //Create the new Todo
      const newTodo = makeNewTodo(
        todoTitle,
        todoDescription,
        todoDueDate,
        todoPriority,
        todoNotes,
        todoId
      );

      console.log("Here is the new todo: " + newTodo);

      //Figure out which project we need to add this todo to
      /* const dropDownCnt = document.getElementById("project-dropdown");
      const dropdownDomArr = dropDownCnt.getElementsByTagName("option");
      const dropDownArr = [...dropdownDomArr];
      console.log("Dropdown Dom Arr: " + dropdownDomArr);
      console.log("Dropdown Arr: " + dropDownArr); */

      const dropDownId = getSelectedDropdownId();
      console.log("The selected dropdown: " + dropDownId);
      //Add the todo to the correct project
      const selectedProject = projectArr.find((project) => {
        return project.projectId == dropDownId;
      });

      console.dir("The project is: " + selectedProject);
      console.log(JSON.stringify(selectedProject));
      selectedProject.addTodoToProject(newTodo);
      console.log(projectArr);
      //addTodoToProject();

      //Lets add the checklist items to the newly created todo item
      const checklistCnt = document.querySelector(
        ".form-todo-checklist-item-container"
      );
      console.log("The checklist Cnt: " + checklistCnt);
      const checklistDomArr = checklistCnt.getElementsByTagName("li");
      const checklistArr = [...checklistDomArr];
      console.log("Here is the checklistArr: ");
      console.dir(checklistArr);

      for (let i = 0; i < checklistArr.length; i++) {
        console.log("A checklist Item: " + checklistArr[i].lastElementChild);
        console.log(
          "A checklist Item value: " + checklistArr[i].lastElementChild.value
        );
        //const checklistTitle = checklistArr[i].lastElementChild.value;
        const checklistImg = checklistArr[i].querySelector(
          ".form-todo-checklist-checkbox-icon"
        );
        console.log(
          "The Checklist item img: " + checklistImg.getAttribute("alt")
        );
        //console.log(JSON.stringify(checklistImg));
        const checklistTitle = checklistArr[i].lastElementChild.value;
        let isDone = false;
        if (checklistImg.getAttribute("alt") == "checked") {
          isDone = true;
        }

        const newChecklistItem = makeNewChecklistItem(checklistTitle, isDone);
        newTodo.addChecklistToTodo(newChecklistItem);
      }
      //getCheckListItemInput
      toggleAddTodoForm();
      clearTodoForm();
      console.log("Add todo clicked!");
      console.log(projectArr);

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
      const formChecklistItemId = uniqueIds.length;
      console.log("Here is the checklist item id: " + formChecklistItemId);
      uniqueIds.push(formChecklistItemId);
      renderCheckListItem(event, formChecklistItemId);
      break;

    case "form-todo-checklist-checkbox-container":
    case "form-todo-checklist-checkbox-icon":
      if (event.target.className == "form-todo-checklist-checkbox-container") {
        toggleCheckBoxStatus(parent);
      } else if (
        event.target.className == "form-todo-checklist-checkbox-icon"
      ) {
        console.log(grandParent);
        toggleCheckBoxStatus(grandParent);
      }
      break;

    case "form-todo-checklist-delete-container":
    case "form-todo-checklist-delete-icon":
      removeItemRender(event);
      break;

    case "add-checklist-item-btn-container":
    case "add-checklist-item-btn":
      const checklistItemId = uniqueIds.length;
      console.log("Here is the checklist item id: " + checklistItemId);
      uniqueIds.push(checklistItemId);
      renderCheckListItem(event, checklistItemId);
      let todoIdStr = "";
      let checklistProjectId = "";
      //Find the todoIdStr for this todo
      //Find the projectId for this todo
      if (event.target.className == "add-checklist-item-btn-container") {
        todoIdStr = grandParent.parentElement.id;
        checklistProjectId =
          grandParent.parentElement.getAttribute("data-project-id");
      } else if (event.target.className == "add-checklist-item-btn") {
        todoIdStr = grandParent.parentElement.parentElement.id;
        checklistProjectId =
          grandParent.parentElement.parentElement.getAttribute(
            "data-project-id"
          );
      }

      regResultArr = todoIdStr.match(numReg);
      let todoIdNum = regResultArr.join("");

      console.log("The reg result arr:");
      console.log(regResultArr);

      console.log("The todoId num is: " + todoIdNum);

      console.log("Project id is: " + checklistProjectId);
      //Grab the projectObj
      const projectObj = projectArr.find((project) => {
        return checklistProjectId == project.projectId;
      });
      ///console.log("The project is: " + JSON.stringify(projectObj));

      //Grab the todoObj for this projectObj
      const todosArr = projectObj.todos;
      console.log("Here is there todos Arr for the project: ");
      console.dir(todosArr);
      const todoObj = todosArr.find((todo) => {
        return todoIdNum == todo.todoId;
      });

      console.log("Here is the todoObj: " + JSON.stringify(todoObj));
      //Create a new checklist obj and push that into the todo checklist Arr
      const newChecklistObj = makeNewChecklistItem("", false);
      todoObj.addChecklistToTodo(newChecklistObj);
      console.log(JSON.stringify(todoObj));
      console.log(projectArr);

      break;

    case "todo-checkbox-container":
    case "todo-item-checkbox":
      let checkBoxTodoIdStr = "";
      let checkBoxtodoIdNum = "";
      let checkBoxprojectIdForTodo = "";
      let passedContainer = "";
      if (event.target.className == "todo-checkbox-container") {
        checkBoxTodoIdStr = parent.id;
        passedContainer = parent;
        checkBoxprojectIdForTodo = parent.getAttribute("data-project-id");
      } else if (event.target.className == "todo-item-checkbox") {
        checkBoxTodoIdStr = grandParent.id;
        checkBoxprojectIdForTodo = grandParent.getAttribute("data-project-id");
        passedContainer = grandParent;
      }

      regResultArr = checkBoxTodoIdStr.match(numReg);
      checkBoxtodoIdNum = regResultArr.join("");

      toggleTodoIsDone(projectArr, checkBoxtodoIdNum, checkBoxprojectIdForTodo);
      toggleCheckBoxStatus(passedContainer);
      console.log(projectArr);
      break;

    case "todo-checklist-checkbox-icon":
    case "todo-checklist-checkbox-container":
      //
      let checklistTodoIdStr = "";
      let checklistTodoIdNum = "";
      let checklistTodoProjectId = "";
      let checklistTodoArrIndex = "";
      let checklistTodoCnt = "";
      let checklistId = "";

      if (event.target.className == "todo-checklist-checkbox-container") {
        checklistTodoIdStr =
          grandParent.parentElement.parentElement.parentElement.id;
        checklistTodoProjectId =
          grandParent.parentElement.parentElement.parentElement.getAttribute(
            "data-project-id"
          );
        todoChecklistCnt = grandParent;
        checklistId = parent.id;
        toggleCheckBoxStatus(parent);
      } else if (event.target.className == "todo-checklist-checkbox-icon") {
        checklistTodoIdStr =
          grandParent.parentElement.parentElement.parentElement.parentElement
            .id;
        checklistTodoProjectId =
          grandParent.parentElement.parentElement.parentElement.parentElement.getAttribute(
            "data-project-id"
          );
        checklistId = grandParent.id;

        toggleCheckBoxStatus(grandParent);
      }

      regResultArr = checklistTodoIdStr.match(numReg);
      checklistTodoIdNum = regResultArr.join("");

      //Get an array of the checklist items
      checklistTodoCnt = grandParent.parentElement;
      console.log("Checklist cnt:" + checklistTodoCnt);
      console.log(checklistTodoCnt.childElementCount);
      const checklistDomArray = checklistTodoCnt.children;
      console.log(checklistDomArray);
      const checklistArray = [...checklistDomArray];
      console.log(checklistArray);

      //Figure out which index our clicked checklist item is at
      checklistTodoArrIndex = checklistArray.findIndex((listItem) => {
        return listItem.id == grandParent.id;
      });
      console.log(checklistTodoArrIndex);

      toggleChecklistItemIsDone(
        projectArr,
        checklistTodoProjectId,
        checklistTodoIdNum,
        checklistTodoArrIndex
      );
      break;

    case "todo-delete-container":
    case "todo-delete-icon":
      let deleteToodoIdStr = "";
      let deleteTodoIdNum = "";
      let deleteProjectIdForTodo = "";

      if (event.target.className == "todo-delete-container") {
        deleteToodoIdStr = parent.id;
        deleteProjectIdForTodo = parent.getAttribute("data-project-id");
      } else if (event.target.className == "todo-delete-icon") {
        console.log("The todo item id str: " + deleteToodoIdStr);
        deleteToodoIdStr = grandParent.id;
        deleteProjectIdForTodo = grandParent.getAttribute("data-project-id");
      }

      regResultArr = deleteToodoIdStr.match(numReg);
      deleteTodoIdNum = regResultArr.join("");
      console.log("The todo item id str: " + deleteToodoIdStr);
      removeTodoItem(projectArr, deleteTodoIdNum, deleteProjectIdForTodo);
      removeItemRender(event);
      break;

    case "todo-checklist-delete-container":
    case "todo-checklist-delete-icon":
      console.log("Hey delete was clicked!");
      //removeChecklistItem();
      //removeTodoItem(todoId);
      let checklistDltTodoIdStr = "";
      let checklistDltTodoIdNum = "";
      let checklistDltProjectId = "";
      let checklistArrIndex = "";
      let todoChecklistCnt = "";
      let checklistTodoItemId = "";
      //console.log(checklistArr[0].id);
      //console.log(grandParent.id);

      if (event.target.className == "todo-checklist-delete-container") {
        checklistDltTodoIdStr =
          grandParent.parentElement.parentElement.parentElement.id;
        checklistDltProjectId =
          grandParent.parentElement.parentElement.parentElement.getAttribute(
            "data-project-id"
          );
        todoChecklistCnt = grandParent;
        checklistTodoItemId = parent.id;
      } else if (event.target.className == "todo-checklist-delete-icon") {
        checklistDltTodoIdStr =
          grandParent.parentElement.parentElement.parentElement.parentElement
            .id;
        checklistDltProjectId =
          grandParent.parentElement.parentElement.parentElement.parentElement.getAttribute(
            "data-project-id"
          );
        todoChecklistCnt = grandParent.parentElement;
        checklistTodoItemId = grandParent.id;
      }

      regResultArr = checklistDltTodoIdStr.match(numReg);
      checklistDltTodoIdNum = regResultArr.join("");

      // console.dir(todoChecklistCnt);
      //console.log(todoChecklistCnt.childElementCount);
      const todoChecklistDomArr = todoChecklistCnt.children;
      console.log(todoChecklistDomArr);
      const todoChecklistArr = [...todoChecklistDomArr];
      console.log(todoChecklistArr);
      //console.log("The list item id: " + listItem.id);
      console.log("The checklistTodoItemId: " + checklistDltTodoIdStr);
      ///Figure out which index our clicked checklist item is at
      checklistArrIndex = todoChecklistArr.findIndex((listItem) => {
        return listItem.id == checklistTodoItemId;
      });

      removeChecklistItem(
        projectArr,
        checklistDltProjectId,
        checklistDltTodoIdNum,
        checklistArrIndex
      );
      removeItemRender(event);
      console.log(projectArr);
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

const updateValues = (event) => {
  const parent = event.target.parentElement;
  const grandParent = event.target.parentElement.parentElement;

  console.log(parent);
  console.log(grandParent);

  console.log("The change event target is: ");
  console.dir(event.target);
  console.log("The value is: ");
  console.dir(event.target.value);
  console.log(event.target.className);

  const numReg = /\d/g;
  let regResultArr = "";

  //Save the input that has been typed in
  const typedInput = event.target.value;

  //Get the project obj we have made title changes to
  ///Grab the project id str
  //const projectItemIdStr = event.target.id;
  let projectItemIdStr = "";
  if (event.target.hasAttribute("data-project")) {
    projectItemIdStr = event.target.id;
  } else if (event.target.hasAttribute("data-todo")) {
    projectItemIdStr =
      event.target.parentElement.getAttribute("data-project-id");
  }

  console.log("The projectItemIdStr: " + projectItemIdStr);
  ///Lets get the project id number from the project id str
  let projectIdNum = "";
  regResultArr = projectItemIdStr.match(numReg);
  projectIdNum = regResultArr.join("");
  ///Find the correct project obj with the acquired project id num
  const projectObj = projectArr.find((project) => {
    return project.projectId == projectIdNum;
  });
  console.log("The project obj:");
  console.dir(projectObj);

  //Lets get the correct todo from the projectObj
  let todoIdStr = "";

  ///Lets get the clicked on todoIdStr
  if (event.target.hasAttribute("data-todo")) {
    console.log("Hey a todo item is trying to be changed");
    todoIdStr = event.target.id;
  } else if (event.target.hasAttribute("data-todo-checklist-item")) {
    console.log("Hey a checklist item is trying to be changed");
    todoIdStr =
      grandParent.parentElement.parentElement.parentElement.parentElement.id;
  }

  console.log("The todoIdStr is: " + todoIdStr);

  ///Lets get the todo id num from the todo id str
  let todoIdNum = "";
  regResultArr = todoIdStr.match(numReg);
  todoIdNum = regResultArr.join("");

  console.log("The todoIdNum is: " + todoIdNum);

  //Lets get the todo array for the current project
  const todoArr = projectObj.todos;
  console.log(todoArr);

  ///Find the correct todo obj with the acquired todo id num
  const todoObj = todoArr.find((todo) => {
    return todo.todoId == todoIdNum;
  });

  console.log("And here is the correct todo Obj");
  console.dir(todoObj);

  switch (
    event.target.getAttribute("data-project") ||
    event.target.getAttribute("data-todo")
  ) {
    case "project-title":
      console.log("It was the project title input that was changed!");
      projectObj.title = typedInput;
      console.log(projectObj);
      console.log(projectArr);

      break;

    case "project-description":
      console.log("It was the project description input that was changed!");
      projectObj.description = typedInput;
      console.log(projectObj);
      console.log(projectArr);
      break;

    case "project-duedate":
      console.log("It was the project duedate input that was changed!");
      projectObj.dueDate = typedInput;
      console.log(projectObj);
      console.log(projectArr);
      break;

    case "todo-title":
      console.log("Todo project was changed!");
      todoObj.title = typedInput;
      console.log(projectArr);

      break;

    case "todo-priority":
      console.log("The priority dropdown was clicked!");
      todoObj.priority = typedInput;
      console.log(projectArr);
      break;

    case "todo-description":
      console.log("The description was changed!");
      todoObj.description = typedInput;
      console.log(projectArr);
      break;

    case "todo-duedate":
      console.log("The duedate was changed!");
      todoObj.dueDate = typedInput;
      console.log("Here is the todo duedate: " + todoObj.dueDate);
      console.log(projectArr);
      break;
  }
};

const dropDownElement = document.getElementById("project-dropdown");

dropDownElement.addEventListener("change", (event) => {
  console.log("Hey a dropdown option has been clicked on!");
  const selectedProjectId = getSelectedDropdownId();
  toggleVisibleTodos(selectedProjectId);
});

//Create the  Project array
const projectArr = [];

//Create the  id array
const uniqueIds = [];

//Initiate defaultProject
const defaultProject = new Project(
  "Default",
  "Add a description!",
  "2021-07-21",
  0
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

//Add the first unqie id to the array
uniqueIds.push(0);

//Create defaultTodo
const defaultTodo = new Todo(
  "Do the washing",
  "Remember to check for plecters",
  "2021-10-21",
  "1st",
  "These are my awesome notes",
  1
);

//Add it to the default project
defaultProject.addTodoToProject(defaultTodo);

//Add another unique id to the array
uniqueIds.push(1);

//console.log(projectArr);

console.log(defaultProject);

//Create a defaultCheckListItem
const defaultCheckListItem = new CheckListItem("Check temp", false);

console.log(defaultCheckListItem);

//Add it to the default Todo
defaultTodo.addChecklistToTodo(defaultCheckListItem);
//defaultTodo.isDone = true;

//Add 2nd unique id to the array in this default setup
uniqueIds.push(2);

//Add the last unique id to the array in this default setup, this is for the default todo form checklist item
uniqueIds.push(3);

console.log(defaultTodo);

console.log(defaultProject);

defaultCheckListItem.isDone = true;

console.log(defaultProject);
console.log(defaultProject.title);
console.log(defaultProject.projectId);

//defaultProject.title = "Home stuff changed";

//console.log(defaultProject.title);

console.log(uniqueIds);
