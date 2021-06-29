const Project = class {
  isDone = false;
  todos = [];

  constructor(title, description, dueDate, projectId) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.projectId = projectId;
  }

  get title() {
    return this._title;
  }

  set title(titleInput) {
    /*     if (titleInput.length < 1) {
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

  get projectId() {
    return this._projectId;
  }

  set projectId(projectIdInput) {
    this._projectId = projectIdInput;
  }

  get isDone() {
    return this._isDone;
  }

  set isDone(isDoneInput) {
    this._isDone = isDoneInput;
  }

  get todos() {
    return this._todos;
  }

  addTodoToProject(todo) {
    this.todos.push(todo);
  }
};

const generateProjectId = (projectArr) => {
  return projectArr.length + 1;
};

const makeNewProject = (title, description, duedate, projectId) => {
  const newProject = new Project(title, description, duedate, projectId);
  return newProject;
};

const removeProjectItem = (projectArr, passedProjectId) => {
  console.log("You are now in the remove Project item function");
  console.log(projectArr);
  //console.log(passedProjectId);
  //console.log(projectArr[0].projectId);
  const projectIndex = projectArr.findIndex((project) => {
    //console.log(project);
    //console.log(project.projectId);
    return project.projectId == passedProjectId;
  });
  console.log("The project index is: " + projectIndex);
  projectArr.splice(projectIndex, 1);
  console.log(projectArr);
};

const toggleProjectDone = (projectArr, projectId) => {
  console.log(projectArr);
  console.log(projectId);
  //console.log(projectArr[0].isDone);
  const projectToMarkAsDone = projectArr.find((project) => {
    return project.projectId === Number.parseInt(projectId);
  });
  if (projectToMarkAsDone.isDone === false) {
    console.log(projectToMarkAsDone);
    projectToMarkAsDone.isDone = true;
    console.log(projectToMarkAsDone);
  } else {
    console.log(projectToMarkAsDone);
    projectToMarkAsDone.isDone = false;
    console.log(projectToMarkAsDone);
  }
};

const updateProjectIdsInArr = (projectArr) => {
  console.log("You are now in the updateProjectIds func");
  for (let i = 0; i < projectArr.length; i++) {
    //const element = array[i];
    projectArr[i].projectId = i + 1;
  }
};

export {
  Project,
  generateProjectId,
  makeNewProject,
  removeProjectItem,
  toggleProjectDone,
  updateProjectIdsInArr,
};
