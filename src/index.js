/* eslint-disable import/no-mutable-exports */
/* eslint-disable import/no-cycle */
import './StaticListener';
import { createNewProject, createNewTask, updateUI } from './Logic';

let allProjects = [];

// Default project a helper

if (!window.localStorage.getItem('AllProjects')) {
  createNewProject('Sample Project', 'This is my first project');

  createNewTask('This is a sample task', '2021-04-15', 'High');
  createNewTask('On the left side projects are listed', '2021-04-15', 'Low');
  createNewTask('On the right you see the tasks of the selected project', '2021-04-15', 'High');
  createNewTask('By clicking on the task you can mark it as done', '2021-04-15', 'Low');
}

// Local Storage

const getFromLocalMemory = () => {
  const originalProjects = JSON.parse(window.localStorage.getItem('AllProjects'));
  if (originalProjects) {
    allProjects = originalProjects;
    updateUI();
  }
};

const setLocalMemory = (projects) => {
  if (projects !== []) {
    const myProjectsLocal = JSON.stringify(projects);
    localStorage.setItem('AllProjects', myProjectsLocal);
    console.log(localStorage.getItem('AllProjects'));
  }
};

getFromLocalMemory();

export { allProjects, setLocalMemory };
