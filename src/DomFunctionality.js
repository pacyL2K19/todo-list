/* eslint-disable no-use-before-define */
/* eslint-disable no-alert */
/* eslint-disable import/no-cycle */
/* eslint-disable no-underscore-dangle */
import { createNewProject, createNewTask, editTask } from './Logic';

const newProjectDom = (() => {
  const addProjectBtn = document.querySelector('#add-project');
  const submitProjectBtn = document.getElementById('submit-project');
  const cancelSubmitProjectBtn = document.getElementById('cancel-submit-project');
  const submitProjectWindow = document.querySelector('.submit-project-window');
  const _nameField = document.getElementById('project-name');
  const _descriptionField = document.getElementById('project-description');
  const alertSubmitProject = document.getElementById('alert-submit-project');

  function clear() {
    _nameField.value = '';
    _descriptionField.value = '';
  }

  function hide() {
    clear();
    submitProjectWindow.style.display = 'none';
  }

  function show() {
    editTaskDom.hide();
    newTaskDom.hide();
    submitProjectWindow.style.display = 'block';
  }

  function submitProject() {
    if (_nameField.value !== '' && _descriptionField.value !== '') {
      const name = _nameField.value;
      const description = _descriptionField.value;

      createNewProject(name, description);
      clear();
      hide();
    } else {
      alertSubmitProject.style.display = 'block';
      setTimeout(() => {
        alertSubmitProject.style.display = 'none';
      }, 1500);
    }
  }

  return {
    addProjectBtn,
    cancelSubmitProjectBtn,
    submitProjectBtn,
    show,
    hide,
    submitProject,
  };
})();

const displayHeader = (() => {
  const headerContainer = document.querySelector('.active-project-container');

  function show() {
    headerContainer.style.display = 'flex';
  }

  function hide() {
    headerContainer.style.display = 'none';
  }

  return {
    show,
    hide,
  };
})();

const newTaskDom = (() => {
  const addTaskBtn = document.querySelector('.add-task');
  const addTaskWindow = document.getElementById('submit-task-window');
  const submitTaskBtn = document.getElementById('submit-task');
  const cancelTaskBtn = document.getElementById('cancel-submit-task');
  const _nameField = document.getElementById('task-name');
  const _dueDateField = document.getElementById('task-due-date');
  const _priorityField = document.getElementById('priority');
  const alertSubmitTask = document.getElementById('alert-submit-task');

  function show() {
    editTaskDom.hide();
    newProjectDom.hide();
    addTaskWindow.style.display = 'block';
  }

  function hide() {
    clear();
    addTaskWindow.style.display = 'none';
  }

  function clear() {
    _nameField.value = '';
    _dueDateField.value = '';
    _priorityField.value = '';
  }

  function submitTask() {
    if (_nameField.value !== '' && _dueDateField.value !== '' && _priorityField.value !== '') {
      const name = _nameField.value;
      const dueDate = _dueDateField.value;
      const priority = _priorityField.value;

      createNewTask(name, dueDate, priority);
      hide();
    } else {
      alertSubmitTask.style.display = 'block';
      setTimeout(() => {
        alertSubmitTask.style.display = 'none';
      }, 1500);
    }
  }

  return {
    addTaskBtn,
    addTaskWindow,
    submitTaskBtn,
    cancelTaskBtn,
    submitTask,
    show,
    hide,
  };
})();

const editTaskDom = (() => {
  const editTaskWindow = document.getElementById('edit-task-window');
  const updateTaskBtn = document.getElementById('update-task');
  const cancelUpdateBtn = document.getElementById('cancel-update-task');
  const _nameField = document.getElementById('edit-task-name');
  const _dueDateField = document.getElementById('edit-task-due-date');
  const _priorityField = document.getElementById('edit-priority');
  const alertEditTask = document.getElementById('alert-edit-task');
  let selectedTask;

  function show(index) {
    newProjectDom.hide();
    newTaskDom.hide();
    editTaskWindow.style.display = 'block';
    selectedTask = index;
  }

  function hide() {
    clear();
    editTaskWindow.style.display = 'none';
  }

  function clear() {
    _nameField.value = '';
    _dueDateField.value = '';
    _priorityField.value = '';
  }

  function updateTask() {
    if (_nameField.value !== '' && _dueDateField.value !== '' && _priorityField.value !== '') {
      const name = _nameField.value;
      const dueDate = _dueDateField.value;
      const priority = _priorityField.value;

      editTask(selectedTask, name, dueDate, priority);
      hide();
    } else {
      alertEditTask.style.display = 'block';
      setTimeout(() => {
        alertEditTask.style.display = 'none';
      }, 1500);
    }
  }

  return {
    updateTaskBtn,
    cancelUpdateBtn,
    show,
    hide,
    updateTask,
  };
})();

export {
  newProjectDom, displayHeader, newTaskDom, editTaskDom,
};
