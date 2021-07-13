const Todo = class {
  checklist = [];
  isDone = false;

  constructor(title, description, duedate, priority, notes, todoId) {
    this.title = title;
    this.description = description;
    this.duedate = duedate;
    this.priority = priority;
    this.notes = notes;
    this.todoId = todoId;
  }

  get title() {
    return this._title;
  }

  set title(titleInput) {
    /* if (titleInput.length < 1) {
      alert("Name is too short");
      return;
    } */
    this._title = titleInput;
  }

  get description() {
    return this._description;
  }

  set description(descriptionInput) {
    /* if (descriptionInput.length < 1) {
      alert("Description is too short");
      return;
    } */
    this._description = descriptionInput;
  }

  get dueDate() {
    return this._dueDate;
  }

  set dueDate(dueDateInput) {
    this._dueDate = dueDateInput;
  }

  get isDone() {
    return this._isDone;
  }

  set isDone(isDoneInput) {
    this._isDone = isDoneInput;
  }

  get priority() {
    return this._priority;
  }

  set priority(priorityInput) {
    this._priority = priorityInput;
  }

  get notes() {
    return this._notes;
  }

  set notes(notesInput) {
    this._notes = notesInput;
  }

  get checklist() {
    return this._checklist;
  }

  get todoId() {
    return this._todoId;
  }

  set todoId(todoIdInput) {
    this._todoId = todoIdInput;
  }

  addChecklistToTodo(checklistItem) {
    this.checklist.push(checklistItem);
  }
};

const makeNewTodo = (title, description, duedate, priority, notes, todoId) => {
  const newTodo = new Todo(
    title,
    description,
    duedate,
    priority,
    notes,
    todoId
  );
  return newTodo;
};

const removeTodoItem = (projectArr, passedTodoId, projectId) => {
  console.log("You are now in the removeTodoItem Func");
  console.log(projectArr);
  const projectObj = projectArr.find((project) => {
    return project.projectId == `${projectId}`;
  });
  console.log("Here is the projectObj: " + /* JSON.stringify */ projectObj);

  const projectTodos = projectObj.todos;

  const todoIndex = projectTodos.findIndex((todo) => {
    return todo.todoId == passedTodoId;
  });

  projectTodos.splice(todoIndex, 1);

  console.log(projectArr);
};

const toggleTodoIsDone = (projectArr, passedTodoId, projectId) => {
  console.log("Hey we are in the toggoleToDoIsDone func");
  console.log("Here is the project Arr: " + /* JSON.stringify */ projectArr);
  console.log("Here is the todoId: " + passedTodoId);
  console.log("Here is the projectId: " + projectId);

  const projectObj = projectArr.find((project) => {
    return project.projectId == `${projectId}`;
  });

  console.log("Here is the projectObj: " + /* JSON.stringify */ projectObj);

  const projectTodos = projectObj.todos;
  console.log(
    "Here is there project todos: " + /* JSON.stringify */ projectTodos
  );

  console.log("The first todo item id: " + projectTodos[0].todoId);
  console.log("The passed todo id: " + passedTodoId);

  const todoObj = projectTodos.find((todo) => {
    return todo.todoId == passedTodoId;
  });

  console.log("Here is there todo Obj: " + JSON.stringify(todoObj));

  if (todoObj.isDone == true) {
    todoObj.isDone = false;
  } else {
    todoObj.isDone = true;
  }

  console.log("Here is there todo Obj: " + JSON.stringify(todoObj));
};

export { Todo, makeNewTodo, toggleTodoIsDone, removeTodoItem };
