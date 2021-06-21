import { format, compareAsc } from "date-fns";
import { Project } from "./projects";
import {
  createDefaultEventListeners,
  renderNewProject,
} from "./domManipulation.js";

//Initiate defaultProject
const defaultProject = new Project(
  "Default",
  "Add a description!",
  "2021-07-21"
);

const projectArr = [];

projectArr.push(defaultProject);

createDefaultEventListeners();

renderNewProject(
  defaultProject.title,
  defaultProject.description,
  defaultProject.dueDate
);

console.log(projectArr);

console.log(defaultProject);

console.log(defaultProject.title);

defaultProject.title = "Home stuff changed";

console.log(defaultProject.title);
