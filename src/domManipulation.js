const renderNewProject = (uniqueId) => {
  const titleInput = document.getElementById("form-project-title").value;
  const descriptionInput = document.getElementById(
    "form-project-description"
  ).value;
  const dueDateInput = document.getElementById("form-project-duedate").value;
  //console.log("Hello");
  //const projectsContainer = document.querySelector(".projects-container");

  //Get the container for projects
  const projectsCnt = document.querySelector(".projects-container");
  console.log(projectsCnt);

  //Create article container for project item

  const projectItemArticle = document.createElement("article");
  projectItemArticle.className = "project-item";
  //let projectIdNum = countAmountOfItems(projectsCnt);

  //let projectId = `project-item-` + `${projectIdNum}`;
  //console.log(`Project id is: projectId: ${projectId}`);
  projectItemArticle.id = `project-item-` + `${uniqueId}`;

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
  checkIcon.setAttribute("alt", "unchecked");
  checkIcon.className = "project-checkbox-icon";

  projectCheckCnt.appendChild(checkIcon);

  //Create project title
  const projectTitle = document.createElement("input");
  projectTitle.setAttribute("type", "text");
  //projectTitle.setAttribute("placeholder", "Default");
  //let projectIdNum = countAmountOfItems(projectsCnt);
  projectTitle.id = `project-item-` + `${uniqueId}-title`;
  projectTitle.setAttribute("data-project", "project-title");
  projectTitle.className = "project-item-input";
  projectTitle.value = titleInput;

  projectItemArticle.appendChild(projectTitle);

  //Create project description
  const projectDescription = document.createElement("input");
  projectDescription.setAttribute("type", "text");
  //projectDescription.setAttribute("placeholder", "Your first project!");
  projectDescription.id = `project-item-` + `${uniqueId}-description`;
  projectDescription.setAttribute("data-project", "project-description");
  projectDescription.className = "project-item-input";
  projectDescription.value = descriptionInput;

  projectItemArticle.appendChild(projectDescription);

  //Create project due date
  const projectDueDate = document.createElement("input");
  projectDueDate.setAttribute("type", "date");
  //console.log("What is due date in default project: " + dueDateInput);
  projectDueDate.id = `project-item-` + `${uniqueId}-duedate`;
  projectDueDate.setAttribute("data-project", "project-duedate");
  projectDueDate.className = "project-item-input";
  projectDueDate.value = dueDateInput;
  // console.log("What is due date in default project: " + projectDueDate.value);

  projectItemArticle.appendChild(projectDueDate);
  console.log(projectDltCnt);

  //return projectIdNum;
};

const getProjectTitleInput = () => {
  //console.log("What is project id in getproject title input? " + projectId);
  const title = document.getElementById("form-project-title").value;
  //console.log("Getting project title input " + title);
  return title;
};

const getProjectDescriptionInput = () => {
  const description = document.getElementById("form-project-description").value;
  return description;
};

const getProjectDuedateInput = () => {
  const duedate = document.getElementById("form-project-duedate").value;
  return duedate;
};

/* const addProjectToDropdown = (title) => {
  console.log("Hey lets add project to the dropdown!");
  const dropDown = document.getElementById("project-dropdown");
  const newOption = document.createElement("option");
  newOption.setAttribute("value", title);
  newOption.innerHTML = title;
  console.log(newOption);

  dropDown.appendChild(newOption);
}; */

/* const removeProjectFromDropdown = (element) => {
  console.log("Here is the id: " + element);
  const projectToRemove = document.getElementById(`${element}`);
  const title = document.getElementById(`${element}-title`).value;
  console.log(title);
  const dropDown = document.getElementById("project-dropdown");
  console.log("project to remove from dropdown: " + projectToRemove);
  //dropDown.removeChild
}; */

const updateProjectDropDown = (projectArr) => {
  console.log("You are now in update project dropdow");
  console.log("This is what is in the project Arr: " + projectArr);
  const dropDown = document.getElementById("project-dropdown");

  while (dropDown.firstChild) {
    dropDown.removeChild(dropDown.firstChild);
  }

  for (let i = 0; i < projectArr.length; i++) {
    const projectTitle = projectArr[i].title;
    const projectId = projectArr[i].projectId;
    console.log("Project title: " + projectTitle);
    const newOption = document.createElement("option");
    newOption.setAttribute("value", `${projectTitle}`);
    newOption.setAttribute("data-project-id", `${projectId}`);
    newOption.classList.add("dropdown-option");
    newOption.innerHTML = projectTitle;
    dropDown.appendChild(newOption);
  }
};

const renderNewTodo = (uniqueId, projectId) => {
  //Fetch the input values from the form we have just filled out
  //console.log("Here is the passed project id in rendernew todo: " + projectId);
  const titleInput = document.getElementById("form-todo-title").value;
  const priorityInput = document.getElementById("form-todo-priority").value;
  const descriptionInput = document.getElementById(
    "form-todo-description"
  ).value;
  const duedateInput = document.getElementById("form-todo-duedate").value;
  const notesInput = document.getElementById("form-todo-notes").value;
  console.log(notesInput);

  //Grab the container for the checklist items
  const checkListItemsCnt = document.querySelector(
    ".form-todo-checklist-item-container"
  );

  //Lets get a number for how many checklist items we actually have added in the form
  const numOfAddedCheckListItems = countAmountOfItems(checkListItemsCnt);
  //Make an array where we store the inputs for each checklist item
  const checklistItemInputs = [];
  //Lets get the first array iteration of the html checklist input nodes
  const checklistItemInputsDomArr =
    checkListItemsCnt.getElementsByTagName("input");
  //Lets convert that to an actual array
  const checklistItemInputsArr = [...checklistItemInputsDomArr];
  console.log("Here is the checklistItems Arr: " + checklistItemInputsArr);

  //Same procedure but this time for the checklist item status
  const checklistItemCheckedStatus = [];
  const checklistItemCheckedStatusDomArr = checkListItemsCnt.querySelectorAll(
    ".form-todo-checklist-checkbox-icon"
  );
  const checklistItemCheckedStatusArr = [...checklistItemCheckedStatusDomArr];
  console.log(
    "Here is the checklistItemStatus Arr: " + checklistItemCheckedStatusArr
  );

  //Lets go through both arrays and push their values to their respective arrays, for the checklist item inputs and their checked status
  for (let i = 0; i < checklistItemInputsArr.length; i++) {
    checklistItemInputs.push(checklistItemInputsArr[i].value);
    //console.log(checklistItemCheckedStatusArr[i].getAttribute("alt"));
    checklistItemCheckedStatus.push(
      checklistItemCheckedStatusArr[i].getAttribute("alt")
    );
  }

  console.log("Here are the inputs: " + checklistItemInputs);

  //Now we can start building a todo

  //Get the container for the todos
  const todoCnt = document.querySelector(".todos-container");

  //Create the new todo item Article
  const todoItemArticle = document.createElement("article");
  todoItemArticle.className = "todo-item";
  todoItemArticle.setAttribute("data-project-id", `${projectId}`);

  //Make sure the given todo-item id iterates with 1 for every new item added
  //let projectIdNum = countAmountOfItems(todoCnt);
  todoItemArticle.id = `todo-item-` + `${uniqueId}`;

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
  checkboxIcon.setAttribute("alt", "unchecked");

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
  expandIcon.className = "expand-icon";

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

  const checklistInputsPassed = checklistItemInputs;
  let checkListInputCounter = 0;

  const checklistItemCheckedStatusPassed = checklistItemCheckedStatus;

  console.log("Checklist item inputs: " + checklistInputsPassed);

  //Create checklist item
  for (let i = 0; i < numOfAddedCheckListItems; i++) {
    //const element = array[i];
    //console.log(i);
    //console.log("Number of added checklist items: " + numOfAddedCheckListItems);

    //ADD THE INPUT TO THE CHECKLIST ITEMS
    const checkListItemOne = document.createElement("li");
    checkListItemOne.className = "todo-checklist-item";
    //let checklistItemsCounter = countAmountOfItems(todoCheckListItemCtn);
    checkListItemOne.id = `todo-checklist-item-` + `${uniqueId}`;

    todoCheckListItemCtn.appendChild(checkListItemOne);

    const TodoCheckListDeleteCnt = document.createElement("div");
    TodoCheckListDeleteCnt.className = "todo-checklist-delete-container";

    checkListItemOne.appendChild(TodoCheckListDeleteCnt);

    const checkListDeleteIcon = document.createElement("img");
    checkListDeleteIcon.setAttribute("src", "./img/delete.png");
    checkListDeleteIcon.className = "todo-checklist-delete-icon";

    TodoCheckListDeleteCnt.appendChild(checkListDeleteIcon);

    const TodoCheckListCheckboxCnt = document.createElement("div");
    TodoCheckListCheckboxCnt.className = "todo-checklist-checkbox-container";

    checkListItemOne.appendChild(TodoCheckListCheckboxCnt);

    const checkListIcon = document.createElement("img");
    checkListIcon.className = "todo-checklist-checkbox-icon";

    if (checklistItemCheckedStatusPassed[i] == "unchecked") {
      checkListIcon.setAttribute("src", "./img/box.png");
      checkListIcon.setAttribute("alt", "unchecked");
    } else {
      checkListIcon.setAttribute("src", "./img/boxchecked.png");
      checkListIcon.setAttribute("alt", "checked");
    }

    TodoCheckListCheckboxCnt.appendChild(checkListIcon);

    const textInput = document.createElement("input");
    textInput.value = checklistInputsPassed[checkListInputCounter];
    checkListInputCounter++;

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

const getTodoTitleInput = () => {
  const titleInput = document.getElementById("form-todo-title").value;
  console.log(titleInput);
  return titleInput;
};

const getTodoDescriptionInput = () => {
  const descriptionInput = document.getElementById(
    "form-todo-description"
  ).value;
  console.log(descriptionInput);
  return descriptionInput;
};

const getTodoDueDateInput = () => {
  const duedateInput = document.getElementById("form-todo-duedate").value;
  console.log(duedateInput);
  return duedateInput;
};

const getTodoPriority = () => {
  const priorityInput = document.getElementById("form-todo-priority").value;
  console.log(priorityInput);
  return priorityInput;
};

const getTodoNotes = () => {
  const notesInput = document.getElementById("form-todo-notes").value;
  console.log(notesInput);
  return notesInput;
};

const expandTodo = (parentSibling) => {
  /* const todoItem = parentEl; */
  //console.log(parentSibling);
  parentSibling.classList.toggle("hide");
};

const toggleVisibleTodos = (projectId) => {
  const todoCnt = document.querySelector(".todos-container");
  console.log("Todo cnt: " + todoCnt);
  const todoElementsDomArr = todoCnt.children;
  const todoElementsArr = [...todoElementsDomArr];
  console.log("Todo elements arr: " + todoElementsArr);
  console.log("passed project id is: " + projectId);

  for (let i = 0; i < todoElementsArr.length; i++) {
    console.log("Here is the supposedly data project id: " + projectId);

    console.log(
      "Here is Array element project id: " +
        todoElementsArr[i].getAttribute("data-project-id")
    );
    if (
      projectId != todoElementsArr[i].getAttribute("data-project-id") &&
      todoElementsArr[i].className != "todos-headings"
    ) {
      todoElementsArr[i].classList.add("hide");
    } else {
      todoElementsArr[i].classList.remove("hide");
    }
  }
};

const removeProjectTodosFromDom = (projectId) => {
  console.log("You are now in the remove Project Todos from DOM func");
  const todoCnt = document.querySelector(".todos-container");
  const todoElementsDomArr = todoCnt.children;
  const todoElementsArr = [...todoElementsDomArr];
  console.log("Todo elements arr: " + todoElementsArr);
  console.log("Project Id: " + projectId);

  for (let i = 0; i < todoElementsArr.length; i++) {
    console.log(
      "Html elements project id: " +
        todoElementsArr[i].getAttribute("data-project-id")
    );
    if (projectId == todoElementsArr[i].getAttribute("data-project-id")) {
      console.log(
        "Todo element we want to remove from the DOM: " + todoElementsArr[i]
      );
      todoCnt.removeChild(todoElementsArr[i]);
      //todoElementsArr[i].remove;
    }
  }

  //toggleVisibleTodos(projectId);
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
  // PRIO
  const priority = document.getElementById("form-todo-priority");
  priority.value = "1st";
  const dueDate = document.getElementById("form-todo-duedate");
  dueDate.value = "";
  // NOTES
  const notes = document.getElementById("form-todo-notes");
  notes.value = "";
  //CHECKLIST
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
  const defaultChecklistItem = checkList.firstElementChild.lastElementChild;
  console.log(defaultChecklistItem);
  defaultChecklistItem.value = "";

  //Reset the defaultCheckListItem checked state
  const defaultCheckListItem = checkList.querySelector(
    ".form-todo-checklist-checkbox-icon"
  );
  defaultCheckListItem.setAttribute("alt", "unchecked");
  defaultCheckListItem.setAttribute("src", "./img/box.png");
  /*   console.log(
    "Default checklist item: " + defaultCheckListItem.getAttribute("alt")
  ); */

  //console.log(titleCnt.value);
};

const renderCheckListItem = (event, checklistItemId) => {
  //Get the parent and grandparent nodes
  console.log("Checklist item id: " + checklistItemId);
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

  //Create empty variable that gets filled depending whats been clicked on
  let checkListItemIdPrefix = "";

  //Determine whether we are adding a todo item to the form or in the overview
  if (clickedGrandParentNode == "FORM") {
    checkListItemIdPrefix = "form-";
  } else if (clickedGrandParentNode == "DIV") {
    //checkListItemIdPrefix = "";
    checkListItemIdPrefix = "";

    console.log("Its a div");
  }

  //const checkListCounter = countAmountOfItems(todoCheckListItemCnt);
  //countAmountOfItems()

  //Create the todo list item
  const newCheckListItem = document.createElement("li");
  newCheckListItem.className =
    `${checkListItemIdPrefix}` + "todo-checklist-item";
  newCheckListItem.id =
    `${checkListItemIdPrefix}` + `todo-checklist-item-` + `${checklistItemId}`;

  todoCheckListItemCnt.appendChild(newCheckListItem);

  //Make the delete icon
  const formTodoCheckListDeleteCnt = document.createElement("div");
  formTodoCheckListDeleteCnt.className =
    `${checkListItemIdPrefix}` + "todo-checklist-delete-container";

  newCheckListItem.appendChild(formTodoCheckListDeleteCnt);

  const deleteIcon = document.createElement("img");
  deleteIcon.setAttribute("src", "./img/delete.png");
  deleteIcon.className =
    `${checkListItemIdPrefix}` + "todo-checklist-delete-icon";

  formTodoCheckListDeleteCnt.appendChild(deleteIcon);

  //Make the checklist icon
  const formTodoCheckListCheckboxCnt = document.createElement("div");
  formTodoCheckListCheckboxCnt.className =
    `${checkListItemIdPrefix}` + "todo-checklist-checkbox-container";

  newCheckListItem.appendChild(formTodoCheckListCheckboxCnt);

  const checkListIcon = document.createElement("img");
  checkListIcon.setAttribute("src", "./img/box.png");
  checkListIcon.setAttribute("alt", "unchecked");
  checkListIcon.className =
    `${checkListItemIdPrefix}` + "todo-checklist-checkbox-icon";

  formTodoCheckListCheckboxCnt.appendChild(checkListIcon);

  //Create the text field and its id
  const textInput = document.createElement("input");
  textInput.setAttribute("type", "text");
  textInput.id =
    `${checkListItemIdPrefix}` +
    `todo-checklist-item-` +
    `${checklistItemId}` +
    `-text`;

  newCheckListItem.appendChild(textInput);

  console.log(todoCheckListItemCnt);
};

const getCheckListItemInput = (checklistItem) => {
  const checklistItemInput = checklistItem.lastChild.value;
  console.log(checklistItemInput);
};

const removeItemRender = (event) => {
  let clickedGrandParentNode = event.target.parentElement.parentElement;
  let clickedGreatGrandParentNode =
    event.target.parentElement.parentElement.parentElement;

  clickedGrandParentNode.remove();
};

const updateProjectIdsInTheDom = () => {
  //Updating the article container project id
  console.log("You are now in the updateProjectIdsInTheDom");
  const projectItemDomArr = document.querySelectorAll(".project-item");
  console.log("projectItemDomArr: " + projectItemDomArr);
  const projectItemArr = [...projectItemDomArr];
  console.dir(projectItemArr);
  //console.dir(projectItemArr[0]);

  for (let i = 0; i < projectItemArr.length; i++) {
    //const element = array[i];
    let newId = [i + 1];
    projectItemArr[i].id = `project-item-${newId}`;
    console.dir(projectItemArr[i]);

    //Now we also need to update the project item input ids
    const inputDomArr = projectItemArr[i].getElementsByTagName("input");
    console.dir(inputDomArr);
    const inputArr = [...inputDomArr];
    console.dir(inputArr);

    for (let i = 0; i < inputArr.length; i++) {
      //const element = array[i];
      console.dir(inputArr[i].id);
      //console.log(typeof inputArr[i].id);
      if (inputArr[i].id.includes("title") == true) {
        //inputArr[i].id = ``;
        console.log("You have found the title input!");
        inputArr[i].id = `project-item-${newId}-title`;
      } else if (inputArr[i].id.includes("description") == true) {
        console.log("You have found the description input!");
        inputArr[i].id = `project-item-${newId}-description`;
      } else if (inputArr[i].id.includes("duedate") == true) {
        console.log("You have found the duedate input!");
        inputArr[i].id = `project-item-${newId}-duedate`;
      }
    }
  }
};

const getSelectedDropdownId = () => {
  const dropDown = document.getElementById("project-dropdown");
  console.log("Here are the dropdown options: " + dropDown.options.length);
  if (dropDown.options.length != 0) {
    const selectedDropDown = dropDown.options[dropDown.selectedIndex];
    const dropDownId = selectedDropDown.getAttribute("data-project-id");
    return dropDownId;
  } else {
    return null;
  }
};

const countAmountOfItems = (containerToCheck) => {
  const amountOfCheckListChildren = containerToCheck.childElementCount;

  return amountOfCheckListChildren;
};

const toggleCheckBoxStatus = (domContainer) => {
  console.log(
    "You are now in the toggle checkboxstatus func. domContainer is: " +
      domContainer
  );
  if (domContainer.className == "project-item") {
    //console.log(domContainer);
    const checkBox = domContainer.querySelector(".project-checkbox-icon");
    console.log(checkBox);
    console.log("hey " + checkBox.getAttribute("alt"));
    if (checkBox.getAttribute("alt") == "unchecked") {
      checkBox.setAttribute("src", "./img/boxchecked.png");
      checkBox.setAttribute("alt", "checked");
    } else if (checkBox.getAttribute("alt") == "checked") {
      checkBox.setAttribute("src", "./img/box.png");
      checkBox.setAttribute("alt", "unchecked");
    }
  } else if (domContainer.className == "form-todo-checklist-item") {
    console.log("It was the checklist item checkbox that was clicked!");
    const checkBox = domContainer.querySelector(
      ".form-todo-checklist-checkbox-icon"
    );
    console.log(checkBox);
    console.log("hey " + checkBox.getAttribute("alt"));
    if (checkBox.getAttribute("alt") == "unchecked") {
      checkBox.setAttribute("src", "./img/boxchecked.png");
      checkBox.setAttribute("alt", "checked");
    } else if (checkBox.getAttribute("alt") == "checked") {
      checkBox.setAttribute("src", "./img/box.png");
      checkBox.setAttribute("alt", "unchecked");
    }
  } else if (domContainer.className == "todo-checklist-item") {
    console.log("It was the checklist item checkbox that was clicked!");
    const checkBox = domContainer.querySelector(
      ".todo-checklist-checkbox-icon"
    );
    console.log(checkBox);
    console.log("hey " + checkBox.getAttribute("alt"));
    if (checkBox.getAttribute("alt") == "unchecked") {
      checkBox.setAttribute("src", "./img/boxchecked.png");
      checkBox.setAttribute("alt", "checked");
    } else if (checkBox.getAttribute("alt") == "checked") {
      checkBox.setAttribute("src", "./img/box.png");
      checkBox.setAttribute("alt", "unchecked");
    }
  } else if (domContainer.className == "todo-item") {
    console.log("It was the todo checkbox that was clicked!");
    const checkBox = domContainer.querySelector(".todo-item-checkbox");
    if (checkBox.getAttribute("alt") == "unchecked") {
      checkBox.setAttribute("src", "./img/boxchecked.png");
      checkBox.setAttribute("alt", "checked");
    } else if (checkBox.getAttribute("alt") == "checked") {
      checkBox.setAttribute("src", "./img/box.png");
      checkBox.setAttribute("alt", "unchecked");
    }
  }
};

export {
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
};
