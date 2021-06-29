const Todo = class {
  checklist = [];
  isDone = false;

  constructor(title, description, duedate, priority, notes) {
    this.title = title;
    this.description = description;
    this.duedate = duedate;
    this.priority = priority;
    this.notes = notes;
  }

  get title() {
    return this._title;
  }

  set title(titleInput) {
    if (titleInput.length < 1) {
      alert("Name is too short");
      return;
    }
    this._title = titleInput;
  }

  get description() {
    return this._description;
  }

  set description(descriptionInput) {
    if (descriptionInput.length < 1) {
      alert("Description is too short");
      return;
    }
    this._description = descriptionInput;
  }

  get dueDate() {
    return this._dueDate;
  }

  set dueDate(dueDateInput) {
    this._dueDate = dueDateInput;
  }

  get isDone() {
    return this.isDone;
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

  addChecklistToTodo(checklistItem) {
    this.checklist.push(checklistItem);
  }
};

export { Todo };
