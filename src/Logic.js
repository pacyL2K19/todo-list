/* eslint-disable no-return-assign */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-use-before-define */
/* eslint-disable import/no-cycle */
import { allProjects } from './index';
import { newProject } from './Project';
import { newTask } from './Task';
import { renderProjects, renderHeader, renderTasks } from './Render';
import { displayHeader } from './DomFunctionality';

const setLocalMemory = (projects) => {
  console.log(projects);
  // if (projects !== []) {
  //   const myProjectsLocal = JSON.stringify(projects);
  //   window.localStorage.setItem('AllProjects', myProjectsLocal);
  //  console.log(window.localStorage.getItem('AllProjects'));
  // }
};

const createNewProject = (name, description) => {
  resetActiveProject();
  allProjects.push(newProject(name, description));

  updateUI();
  setLocalMemory(allProjects);
  displayHeader.show();
};

const deleteProject = (index) => {
  if (allProjects[index].active) {
    allProjects[0].active = true;
  }

  if (allProjects.length === 1) {
    allProjects.splice(index, 1);
    updateUI();
    displayHeader.hide();
  }

  if (allProjects.length > 1) {
    allProjects.splice(index, 1);
    updateUI();
  }
  setLocalMemory(allProjects);
};

const resetActiveProject = () => {
  allProjects.forEach(project => project.active = false);
};

const setActiveProject = (index) => {
  resetActiveProject();
  allProjects[index].active = true;
  updateUI();
  setLocalMemory(allProjects);
};

const activeProject = () => {
  const activeProject = allProjects.find(project => project.active === true);
  return activeProject;
};

const createNewTask = (name, dueDate, priority, description) => {
  activeProject().tasks.push(newTask(name, dueDate, priority, description));
  renderTasks();
  setLocalMemory(allProjects);
};

const deleteTask = (index) => {
  activeProject().tasks.splice(index, 1);
  updateUI();
  setLocalMemory(allProjects);
};

const editTask = (index, name, dueDate, priority, description) => {
  activeProject().tasks[index].name = name;
  activeProject().tasks[index].dueDate = dueDate;
  activeProject().tasks[index].priority = priority;
  activeProject().tasks[index].description = description;

  updateUI();
  setLocalMemory(allProjects);
};

const updateTaskStatus = (index) => {
  activeProject().tasks[index].complete
    ? activeProject().tasks[index].complete = false
    : activeProject().tasks[index].complete = true;

  updateUI();
  setLocalMemory(allProjects);
};

const updateUI = () => {
  renderProjects();
  renderHeader();
  renderTasks();
  (allProjects === []) ? displayHeader.hide() : displayHeader.show();
};

export {
  createNewProject, deleteProject, setActiveProject,
  activeProject, createNewTask, deleteTask, editTask, updateTaskStatus, updateUI,
};