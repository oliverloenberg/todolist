const createDefaultEventListeners = () => {
  const mainContainer = document.querySelector("main");

  mainContainer.addEventListener("click", (event) =>
    actionBasedOnClickedElement(event)
  );

  //console.log(mainContainer);
};

const addTodo = () => {
  const titleInput = document.getElementById("form-todo-title").value;
  const priorityInput = document.getElementById("form-todo-priority").value;
  const descriptionInput = document.getElementById(
    "form-todo-description"
  ).value;
  const duedateInput = document.getElementById("form-todo-duedate").value;
  const notesInput = document.getElementById("form-todo-notes").value;
  console.log(notesInput);
  const checkListItemsCnt = document.querySelector(
    ".form-todo-checklist-item-container"
  );

  const numOfAddedCheckListItems = countAmountOfItems(checkListItemsCnt);
  //ADD CHECKLIST TO PASS ON AS ARGUMENT IN RENDERNEWTODO
  renderNewTodo(
    titleInput,
    priorityInput,
    descriptionInput,
    duedateInput,
    notesInput,
    numOfAddedCheckListItems
  );
  //toggleAddTodoForm();
  //clearTodoForm();
};

const renderNewTodo = (
  titleInput,
  priorityInput,
  descriptionInput,
  duedateInput,
  notesInput,
  numOfAddedCheckListItems
) => {
  //Get the container for the todos
  const todoCnt = document.querySelector(".todos-container");

  //Create the new todo item Article
  const todoItemArticle = document.createElement("article");
  todoItemArticle.className = "todo-item";

  //Make sure the given todo-item id iterates with 1 for every new item added
  let itemsCounter = countAmountOfItems(todoCnt);
  todoItemArticle.id = `todo-item-` + `${itemsCounter}`;

  todoCnt.appendChild(todoItemArticle);

  //Create delete icon container
  const todoDltCnt = document.createElement("div");
  todoDltCnt.className = "todo-delete-container";

  todoItemArticle.appendChild(todoDltCnt);

  const deleteIcon = document.createElement("img");
  deleteIcon.setAttribute("src", "./img/delete.png");
  deleteIcon.className = "todo-delete-icon";

  todoDltCnt.appendChild(deleteIcon);

  //Create checkbox icon container
  const todoCheckboxCnt = document.createElement("div");
  todoCheckboxCnt.className = "todo-checkbox-container";

  todoItemArticle.appendChild(todoCheckboxCnt);

  const checkboxIcon = document.createElement("img");
  checkboxIcon.setAttribute("src", "./img/box.png");
  checkboxIcon.className = "todo-item-checkbox";

  todoCheckboxCnt.appendChild(checkboxIcon);

  //Create the title input
  const titleField = document.createElement("input");
  titleField.setAttribute("type", "text");
  titleField.value = titleInput;

  todoItemArticle.appendChild(titleField);

  //Create the priority dropdown input
  const dropdownCnt = document.createElement("select");

  todoItemArticle.appendChild(dropdownCnt);

  const optionOne = document.createElement("option");
  optionOne.setAttribute("value", "1st");
  optionOne.innerHTML = priorityInput;

  const optionTwo = document.createElement("option");
  optionTwo.setAttribute("value", "2nd");
  optionTwo.innerHTML = "2nd";

  const optionThree = document.createElement("option");
  optionThree.setAttribute("value", "3rd");
  optionThree.innerHTML = "3rd";

  dropdownCnt.appendChild(optionOne);
  dropdownCnt.appendChild(optionTwo);
  dropdownCnt.appendChild(optionThree);

  //Create description input
  const descriptionField = document.createElement("input");
  descriptionField.setAttribute("type", "text");
  descriptionField.value = descriptionInput;

  todoItemArticle.appendChild(descriptionField);

  //Create duedate input
  const duedateField = document.createElement("input");
  duedateField.setAttribute("type", "date");
  duedateField.value = duedateInput;

  todoItemArticle.appendChild(duedateField);

  //Create expand icon
  const expandIconCnt = document.createElement("div");
  expandIconCnt.className = "expand";

  todoItemArticle.appendChild(expandIconCnt);

  const expandIcon = document.createElement("img");
  expandIcon.setAttribute("src", "./img/expand.png");
  expandIcon.id = "expand-icon";

  expandIconCnt.appendChild(expandIcon);

  //Create expand container
  const todoExpandCnt = document.createElement("div");
  todoExpandCnt.className = "todo-expand-container";
  todoExpandCnt.classList.add("hide");

  todoItemArticle.appendChild(todoExpandCnt);

  //Create todo notes container
  const todoNotesCnt = document.createElement("div");
  todoNotesCnt.className = "todo-notes-container";

  todoExpandCnt.appendChild(todoNotesCnt);

  const todoNotesLabel = document.createElement("label");
  todoNotesLabel.setAttribute("for", "todo-Notes");
  todoNotesLabel.innerHTML = "Notes:";

  todoNotesCnt.appendChild(todoNotesLabel);

  const todoNotesTextBox = document.createElement("div");
  todoNotesTextBox.setAttribute("role", "textbox");
  todoNotesTextBox.setAttribute("contenteditable", "");
  todoNotesTextBox.className = "todo-notes";
  todoNotesTextBox.innerHTML = notesInput;
  //todoNotesTextBox.id = `todo-notes-` + `${}`;

  todoNotesCnt.appendChild(todoNotesTextBox);

  //Create todo checklist container
  const todoCheckListCnt = document.createElement("div");
  todoCheckListCnt.className = "todo-checklist-container";

  todoExpandCnt.appendChild(todoCheckListCnt);

  const checkListLabel = document.createElement("label");
  checkListLabel.setAttribute("for", "todo-checklist");
  checkListLabel.innerHTML = "Checklist:";

  todoCheckListCnt.appendChild(checkListLabel);

  const todoCheckListItemCtn = document.createElement("ul");
  todoCheckListItemCtn.className = "todo-checklist-item-container";

  todoCheckListCnt.appendChild(todoCheckListItemCtn);

  //Create checklist item
  for (let i = 0; i < numOfAddedCheckListItems; i++) {
    //const element = array[i];
    //console.log(i);
    //console.log("Number of added checklist items: " + numOfAddedCheckListItems);

    const checkListItemOne = document.createElement("li");
    checkListItemOne.className = "todo-checklist-item";
    let checklistItemsCounter = countAmountOfItems(todoCheckListItemCtn);
    checkListItemOne.id =
      `todo-checklist-item-` + `${checklistItemsCounter + 1}`;

    todoCheckListItemCtn.appendChild(checkListItemOne);

    const TodoCheckListDeleteCnt = document.createElement("div");
    TodoCheckListDeleteCnt.className = "todo-checklist-delete-container";

    checkListItemOne.appendChild(TodoCheckListDeleteCnt);

    const checkListDeleteIcon = document.createElement("img");
    checkListDeleteIcon.setAttribute("src", "./img/delete.png");
    checkListDeleteIcon.className = "todo-delete-icon";

    TodoCheckListDeleteCnt.appendChild(checkListDeleteIcon);

    const TodoCheckListCheckboxCnt = document.createElement("div");
    TodoCheckListCheckboxCnt.className = "todo-checklist-checkbox-container";

    checkListItemOne.appendChild(TodoCheckListCheckboxCnt);

    const checkListIcon = document.createElement("img");
    checkListIcon.setAttribute("src", "./img/box.png");
    checkListIcon.className = "todo-checklist-checkbox";

    TodoCheckListCheckboxCnt.appendChild(checkListIcon);

    const textInput = document.createElement("input");

    checkListItemOne.appendChild(textInput);
  }
  //add todolist item btn

  const addCheckListItemBtnCnt = document.createElement("div");
  addCheckListItemBtnCnt.className = "add-checklist-item-btn-container";

  todoCheckListCnt.appendChild(addCheckListItemBtnCnt);

  const checklistAddItemBtn = document.createElement("img");
  checklistAddItemBtn.setAttribute("src", "./img/add.png");
  checklistAddItemBtn.className = "add-checklist-item-btn";

  addCheckListItemBtnCnt.appendChild(checklistAddItemBtn);
};

const addProject = () => {
  const titleInput = document.getElementById("form-project-title").value;
  const descriptionInput = document.getElementById(
    "form-project-description"
  ).value;
  const dueDateInput = document.getElementById("form-project-duedate").value;
  console.log(dueDateInput);

  renderNewProject(titleInput, descriptionInput, dueDateInput);
  toggleAddProjectForm();
  clearProjectForm();
};

const renderNewProject = (titleInput, descriptionInput, duedateInput) => {
  //console.log("Hello");
  //const projectsContainer = document.querySelector(".projects-container");

  //Get the container for projects
  const projectsCnt = document.querySelector(".projects-container");
  console.log(projectsCnt);

  //Create article container for project item

  const projectItemArticle = document.createElement("article");
  projectItemArticle.className = "project-item";
  let itemsCounter = countAmountOfItems(projectsCnt);
  projectItemArticle.id = `project-item-` + `${itemsCounter}`;

  projectsCnt.appendChild(projectItemArticle);

  //Create container for delete icon
  const projectDltCnt = document.createElement("div");
  projectDltCnt.className = "project-delete-container";

  projectItemArticle.appendChild(projectDltCnt);

  ///Create the delete icon
  const deleteIcon = document.createElement("img");
  deleteIcon.setAttribute("src", "./img/delete.png");
  deleteIcon.className = "project-delete-icon";

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
  //projectTitle.setAttribute("placeholder", "Default");
  projectTitle.value = titleInput;

  projectItemArticle.appendChild(projectTitle);

  //Create project description
  const projectDescription = document.createElement("input");
  projectDescription.setAttribute("type", "text");
  //projectDescription.setAttribute("placeholder", "Your first project!");
  projectDescription.value = descriptionInput;

  projectItemArticle.appendChild(projectDescription);

  //Create project due date
  const projectDueDate = document.createElement("input");
  projectDueDate.setAttribute("type", "date");
  console.log("What is due date in default project: " + duedateInput);
  projectDueDate.value = duedateInput;
  console.log("What is due date in default project: " + projectDueDate.value);

  projectItemArticle.appendChild(projectDueDate);
  console.log(projectDltCnt);
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

const todoFormAddCheckListItem = (event) => {
  //Get the parent and grandparent nodes
  const clickedNode = event.target.nodeName;
  const clickedGrandParentNode =
    event.target.parentElement.parentElement.nodeName;

  console.log(clickedNode);
  console.log(clickedGrandParentNode);

  //Create empty variable that gets filled depending whats been clicked on
  let todoCheckListItemCnt = "";

  //Determine which container to attach the todo list item to.
  if (clickedNode == "DIV") {
    console.log("Container was clicked!");
    todoCheckListItemCnt = event.target.previousElementSibling;
    //form-add-checklist-item-btn
  } else if (clickedNode == "IMG") {
    console.log("actual btn was clicked!");
    todoCheckListItemCnt = event.target.parentNode.previousElementSibling;
    console.log(todoCheckListItemCnt);
  } else {
  }

  let checkListItemIdPrefix = "";
  let checklistTextItemIdPrefix = "";
  //Determine whether we are adding a todo item to the form or in the overview
  if (clickedGrandParentNode == "FORM") {
    checkListItemIdPrefix = "form-";
    checklistTextItemIdPrefix = "form-";
  } else if (clickedGrandParentNode == "DIV") {
    //checkListItemIdPrefix = "";
    console.log("Its a div");
  } else {
  }

  const checkListCounter = countAmountOfItems(todoCheckListItemCnt);
  //countAmountOfItems()

  //Create the todo list item
  const newCheckListItem = document.createElement("li");
  newCheckListItem.className = "todo-checklist-item";
  newCheckListItem.id =
    `${checkListItemIdPrefix}` +
    `todo-checklist-item-` +
    `${checkListCounter + 1}`;

  todoCheckListItemCnt.appendChild(newCheckListItem);

  //Make the delete icon
  const formTodoCheckListDeleteCnt = document.createElement("div");
  formTodoCheckListDeleteCnt.className = "todo-checklist-delete-container";

  newCheckListItem.appendChild(formTodoCheckListDeleteCnt);

  const deleteIcon = document.createElement("img");
  deleteIcon.setAttribute("src", "./img/delete.png");
  deleteIcon.className = "todo-delete-icon";

  formTodoCheckListDeleteCnt.appendChild(deleteIcon);

  //Make the checklist icon
  const formTodoCheckListCheckboxCnt = document.createElement("div");
  formTodoCheckListCheckboxCnt.className = "todo-checklist-checkbox-container";

  newCheckListItem.appendChild(formTodoCheckListCheckboxCnt);

  const checkListIcon = document.createElement("img");
  checkListIcon.setAttribute("src", "./img/box.png");
  checkListIcon.className = "todo-checklist-checkbox";

  formTodoCheckListCheckboxCnt.appendChild(checkListIcon);

  //Create the text field and its id
  let checklistTextItemId = countAmountOfItems(todoCheckListItemCnt);
  const textInput = document.createElement("input");
  textInput.id =
    `${checklistTextItemIdPrefix}` +
    `todo-checklist-item-` +
    `${checklistTextItemId}` +
    `-text`;

  newCheckListItem.appendChild(textInput);

  console.log(todoCheckListItemCnt);
};

const removeItem = (event) => {
  let clickedGrandParentNode = event.target.parentElement.parentElement;
  let clickedGreatGrandParentNode =
    event.target.parentElement.parentElement.parentElement;

  if (countAmountOfItems(clickedGreatGrandParentNode) < 2) {
    console.log(
      "You cannot delete all checklist items, there needs to be atleast 1!"
    );
  } else {
    clickedGrandParentNode.remove();
  }
};

const countAmountOfItems = (containerToCheck) => {
  /* const formTodoCheckListItemCnt = document.querySelector(
    ".form-todo-checklist-item-container"
  ); */
  /* const amountOfCheckListChildren = document.querySelector(
    ".form-todo-checklist-item-container"
  ).childElementCount; */
  const amountOfCheckListChildren = containerToCheck.childElementCount;

  return amountOfCheckListChildren;
};

const actionBasedOnClickedElement = (event) => {
  const parentSibling = event.target.parentElement.nextElementSibling;
  console.log(parentSibling);
  console.log(event.target);

  switch (event.target.id || event.target.className) {
    case "project-add-btn":
      toggleAddProjectForm();
      break;

    case "confirm-new-project":
      console.log("Project btn pressed!");
      addProject();
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
      toggleAddTodoForm();
      clearTodoForm();

      break;

    case "todo-delete-container":
    case "project-delete-container":
    case "project-delete-icon":
    case "todo-checklist-delete-container":
    case "todo-delete-icon":
    case "todo-checklist-delete-icon":
      console.log("Hey delete was clicked!");
      removeItem(event);
      break;

    case "form-add-checklist-item-btn-container":
    case "form-add-checklist-item-btn":
    case "add-checklist-item-btn-container":
    case "add-checklist-item-btn":
      todoFormAddCheckListItem(event);
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

export { createDefaultEventListeners, renderNewProject };
