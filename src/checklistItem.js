const CheckListItem = class {
  constructor(title, isDone) {
    this.title = title;
    this.isDone = isDone;
  }

  get title() {
    return this._title;
  }

  set title(titleInput) {
    this._title = titleInput;
  }

  get isDone() {
    return this.isDone;
  }

  set isDone(doneInput) {
    this._isDone = doneInput;
  }
};

export { CheckListItem };
