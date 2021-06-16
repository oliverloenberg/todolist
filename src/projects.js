const Project = class {
  isDone = false;

  constructor(title, description, dueDate) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
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
    return this._dueDate;
  }

  set isDone(isDoneInput) {
    this._isDone = isDoneInput;
  }
};

export { Project };
