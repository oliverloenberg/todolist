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
  findChecklistArray,
  removeChecklistItem,
  toggleChecklistItemIsDone,
} from "./checklistItem";

console.log(localStorage.length);
console.log(localStorage);
//console.log(defaultProject.todos());

//Create the  Project array
const projectArr = [];
console.log(projectArr);

//Create the  id array
let uniqueIds = [];
//
const addProjectToArr = (project) => {
  projectArr.push(project);
};

//LOCAL STORAGE START
//Function that adds the newly created object to the local storage
const addProjectToLocalStorage = (project) => {
  const projectId = project.projectId;
  localStorage.setItem(`project-${projectId}`, JSON.stringify(project));
  console.log(localStorage);
  console.log(JSON.parse(localStorage.getItem(`project-${projectId}`)));
};

const addUniqueIdsArrToLocalStorage = (idArr) => {
  localStorage.setItem(`uniqueIdArr`, JSON.stringify(idArr));
  console.log("A unique id has been added! ");
  console.log(JSON.parse(localStorage.getItem(`uniqueIdArr`)));
};

const addUniqueIdToLocalStorage = (id) => {
  console.log("The passed id: " + id);

  let uniqueIdArr = [];

  uniqueIdArr = JSON.parse(localStorage.getItem("uniqueIdArr"));
  uniqueIdArr.push(id);
  console.log("The uniqueIdArr after having the new id pushed to it: ");
  console.log(uniqueIdArr);

  //Now we overwrite the uniqueIdArr with the newly edited array
  localStorage.setItem("uniqueIdArr", JSON.stringify(uniqueIdArr));
};

if (localStorage.length == 0) {
  console.log("Hey local storage is empty! Lets iniate it!");

  //Initiate defaultProject
  const defaultProject = new Project(
    "Default",
    "Add a description!",
    "2021-07-21",
    0
  );

  //Add it to the project array
  projectArr.push(defaultProject);

  //Add the first unique id to the array
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

  //Add the todo unique id to the unique ids array
  uniqueIds.push(1);

  //Create a defaultCheckListItem
  const defaultCheckListItem = new CheckListItem("Check temp", false, 2);
  console.log("Here is the defaultchecklist Item: ");
  console.log(defaultCheckListItem);

  //Add the last unique id to the array in this default setup, this is for the default todo form checklist item
  uniqueIds.push(2);

  //Add it to the default Todo
  defaultTodo.addChecklistToTodo(defaultCheckListItem);
  //defaultTodo.isDone = true;

  defaultCheckListItem.isDone = true;

  console.log(defaultProject);
  console.log(defaultProject.title);
  console.log(defaultProject.projectId);

  //defaultProject.title = "Home stuff changed";

  //console.log(defaultProject.title);

  console.log(uniqueIds);

  addProjectToLocalStorage(defaultProject);

  //Lets render the stored default project.

  console.log("About to enter the populate project overview loop!");
  renderNewProject(
    projectArr[0].projectId,
    projectArr[0].title,
    projectArr[0].description,
    projectArr[0].dueDate,
    projectArr[0].isDone
  );

  //Lets render the default todo
  const uniqueTodoId = 1;

  renderNewTodo(
    uniqueTodoId,
    projectArr[0].projectId,
    projectArr[0].todos[0].title,
    projectArr[0].todos[0].description,
    projectArr[0].todos[0].dueDate,
    projectArr[0].todos[0].priority,
    projectArr[0].todos[0].notes,
    projectArr[0].todos[0].checklist,
    projectArr[0].todos[0].isDone
  );

  addUniqueIdsArrToLocalStorage(uniqueIds);
} else {
  console.log("There are items saved in the local storage!");
  console.log(projectArr);
  //Grab the projects from the local storages
  //Populate the projectArr with them.
  Object.keys(localStorage).forEach((key) => {
    console.log(JSON.parse(localStorage.getItem(key)));
    //Convert the current key into an obj
    const parsedJsonObj = JSON.parse(localStorage.getItem(key));
    console.log("The key being handled: " + parsedJsonObj);
    console.log(typeof parsedJsonObj);

    //Lets check if this obj is an actual project obj
    if (parsedJsonObj._title != undefined) {
      console.log("Hey this is actually a project obj!");
      const existingProject = parsedJsonObj;
      console.log(existingProject);
      const projectTitle = existingProject._title;
      const projectDescription = existingProject._description;
      const projectDuedate = existingProject._dueDate;
      const projectId = existingProject._projectId;
      const projectIsDone = existingProject.isDone;
      const projectTodos = existingProject.todos;
      console.log("The title is: " + projectTitle);
      console.log("The todos are: " + projectTodos);
      const convertedProjectObj = makeNewProject(
        projectTitle,
        projectDescription,
        projectDuedate,
        projectId
      );
      convertedProjectObj.isDone = projectIsDone;

      //Convert the projects todos also
      const convertedTodosArr = [];
      convertedProjectObj.todos = convertedTodosArr;
      console.log("Converted todos array:");
      console.dir(convertedTodosArr);

      for (let i = 0; i < projectTodos.length; i++) {
        console.log(projectTodos[i]);
        const todo = projectTodos[i];
        const todoTitle = todo._title;
        const todoDescription = todo._description;
        const todoDuedate = todo._dueDate;
        const todoPriority = todo._priority;
        const todoNotes = todo._notes;
        const todoId = todo._todoId;
        const todoIsDone = todo.isDone;

        console.log(
          "Getting the todo dueDate before creation, which is: " + todoDuedate
        );

        const convertedTodo = makeNewTodo(
          todoTitle,
          todoDescription,
          todoDuedate,
          todoPriority,
          todoNotes,
          todoId
        );
        convertedTodo.isDone = todoIsDone;

        console.log("Here is the todo obj duedate: " + convertedTodo.dueDate);

        //Push the todo
        console.log("Here is the converted todo: ");
        console.dir(convertedTodo);
        convertedProjectObj.todos.push(convertedTodo);
        console.log("Converted object todo array: ");
        console.dir(convertedProjectObj.todos);

        //Convert the checklist items
        const existingTodoChecklist = todo.checklist;
        console.log("The existing todo checklist arr: ");
        console.log(existingTodoChecklist);
        /* const convertedTodoChecklist = convertedTodo.checklist;
      console.log("The converted todo checklist arr: ");
      console.log(convertedTodoChecklist); */

        //We also need to add the checklist items converted and saved;
        for (let i = 0; i < existingTodoChecklist.length; i++) {
          const existingTodoChecklistItem = existingTodoChecklist[i];
          const existingTodoChecklistItemTitle =
            existingTodoChecklistItem._title;
          const existingTodoChecklistItemIsDone =
            existingTodoChecklistItem._isDone;
          const existingTodoChecklistItemId =
            existingTodoChecklistItem._checklistItemId;
          const convertedChecklistItem = makeNewChecklistItem(
            existingTodoChecklistItemTitle,
            existingTodoChecklistItemIsDone,
            existingTodoChecklistItemId
          );
          //push the checklist item
          convertedTodo.addChecklistToTodo(convertedChecklistItem);
          console.log("The converted todo checklist arr: ");
          console.dir(convertedTodo.checklist);
        }
      }

      //Push the object
      console.log("The converted project Obj is:");
      console.log(convertedProjectObj);
      console.log(projectArr);
      projectArr.push(convertedProjectObj);
      console.log(projectArr);
    } else {
      //We only save project Obs or the uniqueIds array to the local storage, and have now found the uniqueIds array and need to extract it and save it to our session uniqueIds array
      console.log("This is not a project OBJ: " + parsedJsonObj);
      console.log("Here is the uniqueIds Arr before we overwrite it:");
      console.log(uniqueIds);
      uniqueIds = parsedJsonObj;
      console.log("Here is the now overwritten session uniqueIds Arr:");
      console.log(uniqueIds);
    }
  });

  console.log("Here is the project Arr: ");
  console.log(projectArr);

  //Populate the project overview with the stored projects.
  console.log("About to enter the populate project overview loop!");
  for (let i = 0; i < projectArr.length; i++) {
    console.log("The current project to render:");
    console.log(projectArr[i]);
    console.log("The project id is: " + projectArr[i].projectId);
    renderNewProject(
      projectArr[i].projectId,
      projectArr[i].title,
      projectArr[i].description,
      projectArr[i].dueDate,
      projectArr[i].isDone
    );
  }

  //Populate the todo overview
  console.log("About to enter the populate todo overview loop!");
  for (let i = 0; i < projectArr.length; i++) {
    console.log("The project id is: " + projectArr[i].projectId);
    console.log("The todos to render:");
    console.dir(projectArr[i].todos);
    //Check first if the project in question actually has any todos in it, and if not, skip rendering it.
    if (projectArr[i].todos.length != 0) {
      for (let j = 0; j < projectArr[0].todos.length; j++) {
        console.log("The todo:" + JSON.stringify(projectArr[i].todos[j]));
        console.log("The checklist array: ");
        console.dir(projectArr[i].todos[j].checklist);
        console.log(
          "The duedate being passed is: " + projectArr[i].todos[j].dueDate
        );
        renderNewTodo(
          projectArr[i].todos[j].todoId,
          projectArr[i].projectId,
          projectArr[i].todos[j].title,
          projectArr[i].todos[j].description,
          projectArr[i].todos[j].dueDate,
          projectArr[i].todos[j].priority,
          projectArr[i].todos[j].notes,
          projectArr[i].todos[j].checklist,
          projectArr[i].todos[j].isDone
        );
      }
    } else {
      console.log("This project does not have any todos yet");
    }
  }

  //Populate the project dropdown in the todo overview with the projects saved in the local storage
  updateProjectDropDown(projectArr);

  //Now we need to hide the todos that are not connected with the currently displayed project
  const currentlySelectedProjectId = getSelectedDropdownId();
  console.log(
    "The currently selected project id is: " + currentlySelectedProjectId
  );
  const todoCnt = document.querySelector(".todos-container");
  console.log("The todo container: " + todoCnt);

  const todoItemsArr = todoCnt.querySelectorAll("article");
  console.log("Here is the todoItemsArr:");
  console.dir(todoItemsArr);

  for (let i = 0; i < todoItemsArr.length; i++) {
    if (
      todoItemsArr[i].getAttribute("data-project-id") !=
      currentlySelectedProjectId
    ) {
      todoItemsArr[i].classList.toggle("hide");
    }
  }
}

//Function that removes projects from the local storage
const removeProjectFromLocalStorage = (projectId) => {
  console.log("The passed projectId is: " + projectId);
  //Find the key with the project number equals to projectId
  //const projectToDelete = localStorage.getItem(`project-${projectId}`);
  //console.log(projectToDelete);
  //Remove that project from local storage
  //localStorage.removeItem(projectToDelete);
  localStorage.removeItem(`project-${projectId}`);
  console.log(localStorage);
};

//Function that updates the project object in the local storage
const updateProjectInLocalStorage = (projectId) => {
  console.log("You are now in the updateProjectInLocalStorage func");
  console.log("Project id is:" + projectId);
  const projectToUpdate = projectArr.find((project) => {
    return project.projectId == projectId;
  });
  console.log("Project to update is: " + projectToUpdate);

  localStorage.setItem(`project-${projectId}`, JSON.stringify(projectToUpdate));
  console.log(localStorage);
  console.log(JSON.parse(localStorage.getItem(`project-${projectId}`)));
};

//Function that removes todos from the project object in the local storage
const removeTodoFromLocalStorage = (projectId, todoId) => {
  console.log("You are now in removeTodoFromLocalStorage");
  console.log("The passed projectId is: " + projectId);
  console.log("The passed todoId is: " + todoId);
  const project = JSON.parse(localStorage.getItem(`project-${projectId}`));
  console.log(project);
  const todos = project.todos;
  console.log(todos);

  project.todos = todos.filter((todoItem) => {
    return todoItem._todoId != todoId;
  });
  console.log("The project todos: ");
  console.log(project.todos);
  localStorage.setItem(`project-${projectId}`, JSON.stringify(project));
};

//Function that removes checklist items from the todo object in the local storage
const removeChecklistItemFromLocalStorage = (
  projectId,
  todoId,
  checklistItemId
) => {
  console.log("You are now in removeChecklistItemFromLocalStorage func!");
  console.log("The project id: " + projectId);
  console.log("The todoId: " + todoId);
  console.log("The checklist id: " + checklistItemId);
  const project = JSON.parse(localStorage.getItem(`project-${projectId}`));
  console.log(project);
  const todos = project.todos;
  console.log(todos);

  const todo = todos.find((item) => {
    console.log(item._todoId);
    return item._todoId == todoId;
  });
  console.log(todo);

  let checklistItemsArr = todo.checklist;
  console.log("Here is the checklist Arr: ");
  console.log(checklistItemsArr);

  todo.checklist = checklistItemsArr.filter((item) => {
    return item._checklistItemId != checklistItemId;
  });
  console.log(checklistItemsArr);
  localStorage.setItem(`project-${projectId}`, JSON.stringify(project));
};

//LOCAL STORAGE END

const createDefaultEventListeners = () => {
  const mainContainer = document.querySelector("main");

  mainContainer.addEventListener("click", (event) =>
    actionBasedOnClickedElement(event)
  );
};

createDefaultEventListeners();

const createProjectEventListeners = () => {
  const projectsCnt = document.querySelector(".projects-container");
  console.log(projectsCnt);
  projectsCnt.addEventListener("input", (event) => updateValues(event));
};

createProjectEventListeners();

const createTodoEventListeners = () => {
  const todoCnt = document.querySelector(".todos-container");
  console.log(todoCnt);
  todoCnt.addEventListener("input", (event) => updateValues(event));
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
      addUniqueIdToLocalStorage(projectId);

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
        renderNewProject(projectId, title, description, dueDate, false);
        const newProject = makeNewProject(
          title,
          description,
          dueDate,
          projectId
        );

        addProjectToArr(newProject);
        addProjectToLocalStorage(newProject);
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
      //Remove the correct project item in the project array, local storage and the dom, depending on whether user clicked on the actual delete icon or its container, and update the id in the project array and the dom.
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
      removeProjectFromLocalStorage(projectIdNum);
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
      updateProjectInLocalStorage(checkBoxCntProjectIdNum);

      break;

    //Todo
    case "todo-add-btn":
      toggleAddTodoForm();

      break;

    case "confirm-new-todo":
      //Create a new unique id and add it to the session id array and the local storage
      const todoId = uniqueIds.length;
      uniqueIds.push(todoId);
      addUniqueIdToLocalStorage(todoId);

      //Gather the input from the user so we can pass them as arguments when creating a new todo and rendering it
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
        ".form-todo-checklist-item"
      );
      const checklistItemArr = [...checklistitemDomArr];

      console.log("Checklist item cnt: ");
      console.log(checklistItemCnt);
      console.log("Checklist dom arr: ");
      console.log(checklistitemDomArr);
      console.log("Checklist item Arr: ");
      console.log(checklistItemArr);

      //Create the new Todo object
      const newTodo = makeNewTodo(
        todoTitle,
        todoDescription,
        todoDueDate,
        todoPriority,
        todoNotes,
        todoId
      );

      //Lets add the checklist items to the newly created todo item

      for (let i = 0; i < checklistItemArr.length; i++) {
        console.log(
          "A checklist Item: " + checklistItemArr[i].lastElementChild
        );
        console.log(
          "A checklist Item value: " +
            checklistItemArr[i].lastElementChild.value
        );
        const checklistImg = checklistItemArr[i].querySelector(
          ".form-todo-checklist-checkbox-icon"
        );
        console.log(
          "The Checklist item img: " + checklistImg.getAttribute("alt")
        );
        //console.log(JSON.stringify(checklistImg));
        const checklistTitle = checklistItemArr[i].lastElementChild.value;
        let isDone = false;
        if (checklistImg.getAttribute("alt") == "checked") {
          isDone = true;
        }

        //Lets also create a unique id for each checklist item, and push that to the uniqueIds session array and local storage array.
        const checklistItemId = uniqueIds.length;
        console.log("Here is the checklistItemId: " + checklistItemId);
        uniqueIds.push(checklistItemId);
        addUniqueIdToLocalStorage(checklistItemId);
        console.log("Here is the arr with unique ids:" + uniqueIds);
        const newChecklistItem = makeNewChecklistItem(
          checklistTitle,
          isDone,
          checklistItemId
        );
        newTodo.addChecklistToTodo(newChecklistItem);
      }

      //Render the new Todo and remember to pass on the checklist item array saved in the new todo, which consists of checklist item objs instead of html elements
      console.log("new todo checklist arr:");
      console.log(newTodo.checklist);

      renderNewTodo(
        todoId,
        getSelectedDropdownId(),
        todoTitle,
        todoDescription,
        todoDueDate,
        todoPriority,
        todoNotes,
        newTodo.checklist,
        false
      );

      console.log("Here is the new todo: " + newTodo);

      //Figure out which project we need to add this todo to
      const dropDownId = getSelectedDropdownId();
      console.log("The selected dropdown: " + dropDownId);
      //Add the todo to the correct project
      console.log(projectArr);
      const selectedProject = projectArr.find((project) => {
        return project.projectId == dropDownId;
      });

      console.dir("The project is: " + selectedProject);
      console.log(JSON.stringify(selectedProject));
      selectedProject.addTodoToProject(newTodo);
      console.log(projectArr);
      //addTodoToProject();

      //getCheckListItemInput
      updateProjectInLocalStorage(dropDownId);
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
      //uniqueIds.push(formChecklistItemId);
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
      addUniqueIdToLocalStorage(checklistItemId);
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
      updateProjectInLocalStorage(checkBoxprojectIdForTodo);
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

      updateProjectInLocalStorage(checklistTodoProjectId);
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
      removeTodoFromLocalStorage(deleteProjectIdForTodo, deleteTodoIdNum);
      removeTodoItem(projectArr, deleteTodoIdNum, deleteProjectIdForTodo);
      removeItemRender(event);
      break;

    case "todo-checklist-delete-container":
    case "todo-checklist-delete-icon":
      console.log("Hey delete was clicked!");
      //removeChecklistItem();
      //removeTodoItem(todoId);
      let checklistItemtodoIdStr = "";
      let checklistItemtodoIdNum = "";
      let checklistItemProjectId = "";
      let checklistArrIndex = "";
      let todoChecklistCnt = "";
      let checklistTodoItemId = "";
      let checklistItemIdStr = "";
      let checklistItemIdNum = "";
      //console.log(checklistArr[0].id);
      console.log(grandParent.id);

      if (event.target.className == "todo-checklist-delete-container") {
        checklistItemtodoIdStr =
          grandParent.parentElement.parentElement.parentElement.id;
        checklistItemProjectId =
          grandParent.parentElement.parentElement.parentElement.getAttribute(
            "data-project-id"
          );
        todoChecklistCnt = grandParent;
        checklistTodoItemId = parent.id;
        checklistItemIdStr = event.target.parent.id;
      } else if (event.target.className == "todo-checklist-delete-icon") {
        console.log(event.target);
        checklistItemtodoIdStr =
          grandParent.parentElement.parentElement.parentElement.parentElement
            .id;
        console.log(checklistItemtodoIdStr);
        checklistItemProjectId =
          grandParent.parentElement.parentElement.parentElement.parentElement.getAttribute(
            "data-project-id"
          );
        console.log(checklistItemProjectId);
        todoChecklistCnt = grandParent.parentElement;
        console.log(todoChecklistCnt);
        checklistItemIdStr = grandParent.id;
        console.log(checklistItemIdStr);
      }

      regResultArr = checklistItemtodoIdStr.match(numReg);
      checklistItemtodoIdNum = regResultArr.join("");

      console.log("the checklistItemTodoIdNum: " + checklistItemtodoIdNum);

      const regResultArrForChecklistItem = checklistItemIdStr.match(numReg);
      checklistItemIdNum = regResultArrForChecklistItem.join("");

      // console.dir(todoChecklistCnt);
      //console.log(todoChecklistCnt.childElementCount);
      const todoChecklistDomArr = todoChecklistCnt.children;
      console.log(todoChecklistDomArr);
      const todoChecklistArr = [...todoChecklistDomArr];
      console.log(todoChecklistArr);
      //console.log("The list item id: " + listItem.id);
      console.log("The checklistTodoItemId: " + checklistItemtodoIdStr);
      ///Figure out which index our clicked checklist item is at
      checklistArrIndex = todoChecklistArr.findIndex((listItem) => {
        return listItem.id == checklistTodoItemId;
      });

      removeChecklistItem(
        projectArr,
        checklistItemProjectId,
        checklistItemtodoIdNum,
        checklistArrIndex
      );

      removeChecklistItemFromLocalStorage(
        checklistItemProjectId,
        checklistItemtodoIdNum,
        checklistItemIdNum
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
  let typedInput = "";

  if (event.target.getAttribute("data-todo") == "todo-notes") {
    console.log("Yes its a todo notes!");
    console.log(event.target.textContent);
    typedInput = event.target.textContent;
  } else {
    typedInput = event.target.value;
  }

  let projectItemIdStr = "";
  let todoIdStr = "";

  //Get the project obj we have made title changes to
  ///Grab the project id str
  ///Lets get the clicked on todoIdStr

  if (event.target.hasAttribute("data-project")) {
    projectItemIdStr = event.target.id;
    todoIdStr = null;
  } else if (event.target.getAttribute("data-todo") == "todo-notes") {
    console.log("We are in the if else");
    projectItemIdStr =
      grandParent.parentElement.getAttribute("data-project-id");
    todoIdStr = event.target.id;
  } else if (event.target.hasAttribute("data-todo")) {
    projectItemIdStr =
      event.target.parentElement.getAttribute("data-project-id");
    todoIdStr = event.target.id;
  } else if (event.target.hasAttribute("data-todo-checklist")) {
    projectItemIdStr =
      grandParent.parentElement.parentElement.parentElement.getAttribute(
        "data-project-id"
      );
    todoIdStr = grandParent.parentElement.parentElement.parentElement.id;
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

  let todoIdNum = "";
  let todoArr = "";
  let todoObj = "";
  let todoChecklistCnt = "";
  let checklistTodoItemId = "";
  let todoChecklistDomArr = "";
  let todoChecklistArr = "";
  let checklistArrIndex = "";
  let checklistItems = "";
  let checklistItem = "";

  //Using an if so this structure also works when updating project inputs, so the code below gets ignored
  if (todoIdStr != null) {
    console.log("The todoIdStr is: " + todoIdStr);

    ///Lets get the todo id num from the todo id str
    regResultArr = todoIdStr.match(numReg);
    todoIdNum = regResultArr.join("");

    console.log("The todoIdNum is: " + todoIdNum);

    //Lets get the todo array for the current project
    todoArr = projectObj.todos;
    console.log(todoArr);

    ///Find the correct todo obj with the acquired todo id num
    todoObj = todoArr.find((todo) => {
      return todo.todoId == todoIdNum;
    });

    console.log("And here is the correct todo Obj");
    console.dir(todoObj);

    //Lets find the array index that the clicked checklist item is in
    todoChecklistCnt = grandParent;
    checklistTodoItemId = parent.id;
    console.log("The checklist todo item id is: " + checklistTodoItemId);

    console.dir(todoChecklistCnt);
    console.log(todoChecklistCnt.childElementCount);

    todoChecklistDomArr = todoChecklistCnt.children;
    console.log(todoChecklistDomArr);
    todoChecklistArr = [...todoChecklistDomArr];
    console.log(todoChecklistArr);
    //console.log("The list item id: " + listItem.id);
    //console.log("The checklistTodoItemId: " + checklistDltTodoIdStr);
    ///Figure out which index our clicked checklist item is at
    checklistArrIndex = todoChecklistArr.findIndex((listItem) => {
      return listItem.id == checklistTodoItemId;
    });
    console.log("The checklist Arrindex is: " + checklistArrIndex);

    //Lets find the checklist item in the todos checklist array
    checklistItems = findChecklistArray(projectArr, projectIdNum, todoIdNum);
    checklistItem = checklistItems[checklistArrIndex];
    console.log(checklistItem);
  }

  switch (
    event.target.getAttribute("data-project") ||
    event.target.getAttribute("data-todo") ||
    event.target.getAttribute("data-todo-checklist")
  ) {
    case "project-title":
      console.log("It was the project title input that was changed!");
      projectObj.title = typedInput;
      console.log(projectObj);
      console.log(projectArr);
      //Also remember to update the title value in the todo overview
      const dropDown = document.getElementById("project-dropdown");
      const dropDownArr = [...dropDown.options];
      console.log("The dropdownArr:");
      console.log(dropDownArr);
      //Find the correct project in the dropdown to change the value of
      const dropDownOptionBeingEdited = dropDownArr.find((dropDownOption) => {
        return dropDownOption.getAttribute("data-project-id") == projectIdNum;
      });
      console.log(dropDownOptionBeingEdited);
      dropDownOptionBeingEdited.innerHTML = typedInput;
      //projectIdNum
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

    case "todo-notes":
      console.log("Hey notes were changed!");
      todoObj.notes = typedInput;
      break;

    case "checklist-item-title":
      console.log("The checklist item title has been changed!");
      checklistItem.title = typedInput;
      console.log("Here is the checklist title: " + checklistItem.title);
      console.log(projectArr);
      break;
  }

  updateProjectInLocalStorage(projectIdNum);
};

const dropDownElement = document.getElementById("project-dropdown");

dropDownElement.addEventListener("change", (event) => {
  console.log("Hey a dropdown option has been clicked on!");
  const selectedProjectId = getSelectedDropdownId();
  toggleVisibleTodos(selectedProjectId);
});
