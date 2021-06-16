const createDefaultEventListeners = () => {
  const mainContainer = document.querySelector("main");

  mainContainer.addEventListener("click", (event) =>
    actionBasedOnClickedElement(event)
  );

  //console.log(mainContainer);
};

const renderNewProject = () => {
  //console.log("Hello");

  //Get the container for projects
  const projectsCnt = document.querySelector(".projects-container");
  console.log(projectsCnt);

  //Create article container for project item

  const projectItemArticle = document.createElement("article");
  projectItemArticle.className = "project-item";
  projectItemArticle.id = "project-1";

  projectsCnt.appendChild(projectItemArticle);

  //Create container for delete icon
  const projectDltCnt = document.createElement("div");
  projectDltCnt.className = "project-delete-container";

  projectItemArticle.appendChild(projectDltCnt);

  ///Create the delete icon
  const deleteIcon = document.createElement("img");
  deleteIcon.setAttribute("src", "./img/delete.png");

  projectDltCnt.appendChild(deleteIcon);

  //Create container for checkbox icon
  const projectCheckCnt = document.createElement("div");
  projectCheckCnt.className = "project-checkbox-container";

  projectItemArticle.appendChild(projectCheckCnt);

  ///Create the check icon
  const checkIcon = document.createElement("img");
  checkIcon.setAttribute("src", "./img/box.png");
  checkIcon.className = "project-item-checkbox";

  projectCheckCnt.appendChild(checkIcon);

  //Create project title
  const projectTitle = document.createElement("input");
  projectTitle.setAttribute("type", "text");
  projectTitle.setAttribute("placeholder", "Default");

  projectItemArticle.appendChild(projectTitle);

  //Create project description
  const projectDescription = document.createElement("input");
  projectDescription.setAttribute("type", "text");
  projectDescription.setAttribute("placeholder", "Your first project!");

  projectItemArticle.appendChild(projectDescription);

  //Create project due date
  const projectDueDate = document.createElement("input");
  projectDueDate.setAttribute("type", "date");

  projectItemArticle.appendChild(projectDueDate);
  console.log(projectDltCnt);
};

const actionBasedOnClickedElement = (event) => {
  const parentSibling = event.target.parentElement.nextElementSibling;
  console.log(parentSibling);
  console.log(event.target);

  switch (event.target.id || event.target.className) {
    case "project-add-btn":
      toggleAddProjectForm();
      break;

    case "project-form-close":
    case "project-bar1":
    case "project-bar3":
      //console.log("Close btn pushed!");
      toggleAddProjectForm();
      clearProjectForm();

      break;

    case "todo-add-btn":
      toggleAddTodoForm();

      break;

    case "todo-form-close":
    case "todo-bar1":
    case "todo-bar3":
      console.log("Close btn pushed!");
      toggleAddTodoForm();
      clearTodoForm();

      break;

    case "form-add-checklist-item-btn-container":
    case "form-add-checklist-item-btn":
      todoFormAddCheckListItem();
      break;

    case "expand":
    case "expand-icon":
      console.log("Hey expand got clicked");
      expandTodo(parentSibling);
      switchExpandIcon();
      break;

    default:
      break;
  }
};

const expandTodo = (parentSibling) => {
  /* const todoItem = parentEl; */
  //console.log(parentSibling);
  parentSibling.classList.toggle("hide");
};

const toggleAddProjectForm = (event) => {
  const projectFormCnt = document.querySelector(".project-form-container");

  projectFormCnt.classList.toggle("hide");

  /* const mainContainer = document.querySelector("main");
  console.log(mainContainer);
  //Create the Aside element
  const aside = document.createElement("aside");
  aside.className = "form-container";

  mainContainer.appendChild(aside);

  //Create the form
  const form = document.createElement("form");
  form.setAttribute("action", "#");

  aside.appendChild(form);

  //Populate form
  const closeIconCnt = document.createElement("div");
  closeIconCnt.className = "close-icon";

  form.appendChild(closeIconCnt);

  const closeIconBar1 = document.createElement("div");
  closeIconBar1.className = "bar1";

  closeIconCnt.appendChild(closeIconBar1);

  const closeIconBar3 = document.createElement("div");
  closeIconBar3.className = "bar3";

  closeIconCnt.appendChild(closeIconBar3); */
};

const clearProjectForm = () => {
  const titleCnt = document.getElementById("form-project-title");
  titleCnt.value = "";
  const descriptionCnt = document.getElementById("form-project-description");
  descriptionCnt.value = "";
  const dueDateCnt = document.getElementById("form-project-duedate");
  dueDateCnt.value = "";
  //console.log(titleCnt.value);
};

const toggleAddTodoForm = (event) => {
  const todoFormCnt = document.querySelector(".todo-form-container");
  //console.log(todoFormCnt);
  todoFormCnt.classList.toggle("hide");
};

const clearTodoForm = () => {
  const title = document.getElementById("form-todo-title");
  title.value = "";
  const description = document.getElementById("form-todo-description");
  description.value = "";
  //ADD PRIO
  const priority = document.getElementById("form-todo-priority");
  priority.value = "1st";
  const dueDate = document.getElementById("form-todo-duedate");
  dueDate.value = "";
  //ADD NOTES
  const notes = document.getElementById("form-todo-notes");
  notes.value = "";
  //ADD CHECKLIST
  const checkList = document.querySelector(
    ".form-todo-checklist-item-container"
  );
  const checkListArr = [...checkList.children];
  console.log(checkListArr.length);
  console.log(checkListArr);
  for (let i = 1; i <= checkListArr.length - 1; i++) {
    //console.log(checkListArr);
    //console.log(checkListArr[i]);
    checkListArr[i].remove();
  }
  const checkItem1Text = document.getElementById(
    "form-todo-checklist-item-1-text"
  );
  console.log(checkItem1Text);
  checkItem1Text.value = "";
  //console.log(titleCnt.value);
};

const todoFormAddCheckListItem = () => {
  console.log("Checklist add btn has been pressed!");
  const formTodoCheckListItemCnt = document.querySelector(
    ".form-todo-checklist-item-container"
  );

  const checkListCounter = countAmountOfCheckListItems();
  //countAmountOfCheckListItems()

  const newCheckListItem = document.createElement("li");
  newCheckListItem.className = "form-todo-checklist-item";
  newCheckListItem.id = "form-todo-checklist-item-" + `${checkListCounter + 1}`;

  formTodoCheckListItemCnt.appendChild(newCheckListItem);

  const formTodoCheckListDeleteCnt = document.createElement("div");
  formTodoCheckListDeleteCnt.className = "form-todo-checklist-delete-container";

  newCheckListItem.appendChild(formTodoCheckListDeleteCnt);

  const deleteIcon = document.createElement("img");
  deleteIcon.setAttribute("src", "./img/delete.png");

  formTodoCheckListDeleteCnt.appendChild(deleteIcon);

  const formTodoCheckListCheckboxCnt = document.createElement("div");
  formTodoCheckListCheckboxCnt.className =
    "form-todo-checklist-checkbox-container";

  newCheckListItem.appendChild(formTodoCheckListCheckboxCnt);

  const checkListIcon = document.createElement("img");
  checkListIcon.setAttribute("src", "./img/box.png");
  checkListIcon.className = "form-todo-checklist-checkbox";

  formTodoCheckListCheckboxCnt.appendChild(checkListIcon);

  const textInput = document.createElement("input");

  newCheckListItem.appendChild(textInput);

  console.log(formTodoCheckListItemCnt);
};

const countAmountOfCheckListItems = () => {
  /* const formTodoCheckListItemCnt = document.querySelector(
    ".form-todo-checklist-item-container"
  ); */
  const amountOfCheckListChildren = document.querySelector(
    ".form-todo-checklist-item-container"
  ).childElementCount;

  return amountOfCheckListChildren;
};

export { createDefaultEventListeners, renderNewProject };
