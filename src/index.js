import { format, compareAsc } from "date-fns";
import { Project } from "./projects";
import {
  createDefaultEventListeners,
  renderNewProject,
} from "./domManipulation.js";

//Initiate defaultProject
const defaultProject = new Project("Default", "Add a description!", "Ongoing");

const projectArr = [];

projectArr.push(defaultProject);

createDefaultEventListeners();

renderNewProject();

console.log(projectArr);

console.log(defaultProject);

console.log(defaultProject.title);

defaultProject.title = "Home stuff changed";

console.log(defaultProject.title);
