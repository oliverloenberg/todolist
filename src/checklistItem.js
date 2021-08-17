const CheckListItem = class {
  constructor(title, isDone, checklistItemId) {
    this.title = title;
    this.isDone = isDone;
    this.checklistItemId = checklistItemId;
  }

  get title() {
    return this._title;
  }

  set title(titleInput) {
    this._title = titleInput;
  }

  get isDone() {
    return this._isDone;
  }

  set isDone(doneInput) {
    this._isDone = doneInput;
  }

  get checklistItemId() {
    return this._checklistItemId;
  }

  set checklistItemId(idInput) {
    this._checklistItemId = idInput;
  }
};

const makeNewChecklistItem = (title, isDone, checklistItemId) => {
  const newChecklistItem = new CheckListItem(title, isDone, checklistItemId);
  return newChecklistItem;
};

const findChecklistArray = (projectArr, projectId, passedTodoId) => {
  console.log("You are now ine the findChecklistArray func:");
  console.log("The project arr is: " + projectArr);
  console.log("The projectId is: " + projectId);
  console.log("The passedTodoId is: " + passedTodoId);
  const projectObj = projectArr.find((project) => {
    return project.projectId == projectId;
  });

  console.log(projectObj);

  //Find the correct Todo Obj
  const projectTodos = projectObj.todos;
  const todoObj = projectTodos.find((todo) => {
    return todo.todoId == passedTodoId;
  });
  console.log(todoObj);

  //Find the correct checklist Item obj
  const todoChecklistItems = todoObj.checklist;
  return todoChecklistItems;
};

const removeChecklistItem = (projectArr, projectId, passedTodoId, arrIndex) => {
  console.log("You are now in the removeChecklistItem func");
  console.log("ProjectId: " + projectId);
  console.log("TodoId: " + passedTodoId);
  console.log("Checklist item Arr index: " + arrIndex);

  //Get the checklist Array
  const todoChecklistItems = findChecklistArray(
    projectArr,
    projectId,
    passedTodoId
  );

  //Remove the checklist item at the indicated array index
  todoChecklistItems.splice(arrIndex, 1);
};

//
const toggleChecklistItemIsDone = (
  projectArr,
  projectId,
  passedTodoId,
  arrIndex
) => {
  console.log("You are now in the toggle checklist func");
  console.log("ProjectId: " + projectId);
  console.log("TodoId: " + passedTodoId);
  console.log("Checklist item Arr index: " + arrIndex);

  //Get the checklist Array
  const todoChecklistItems = findChecklistArray(
    projectArr,
    projectId,
    passedTodoId
  );

  //Find the correct checklist Item obj
  const checklistObj = todoChecklistItems[arrIndex];
  console.log(checklistObj);

  if (checklistObj.isDone == true) {
    checklistObj.isDone = false;
  } else {
    checklistObj.isDone = true;
  }
  console.log(projectArr);
  console.log(checklistObj);
};

export {
  CheckListItem,
  makeNewChecklistItem,
  findChecklistArray,
  removeChecklistItem,
  toggleChecklistItemIsDone,
};
