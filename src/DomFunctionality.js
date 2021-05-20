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

  const clear = () => {
    _nameField.value = '';
    _descriptionField.value = '';
  };

  const hide = () => {
    clear();
    submitProjectWindow.classList.add('hiden');
    if (submitProjectWindow.classList.contains('shown')) submitProjectWindow.classList.remove('shown');
  };

  const show = () => {
    editTaskDom.hide();
    newTaskDom.hide();
    submitProjectWindow.classList.add('show');
    if (submitProjectWindow.classList.contains('hiden')) submitProjectWindow.classList.remove('hiden');
  };

  const submitProject = () => {
    if (_nameField.value !== '' && _descriptionField.value !== '') {
      const name = _nameField.value;
      const description = _descriptionField.value;

      createNewProject(name, description);
      clear();
      hide();
    } else {
      alertSubmitProject.classList.remove('alert');
      alertSubmitProject.className.add('alert-show');
      setTimeout(() => {
        alertSubmitProject.classList.remove('alert-show');
        alertSubmitProject.className.add('alert');
      }, 1500);
    }
  };

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

  const show = () => {
    if (headerContainer.classList.contains('hiden')) headerContainer.classList.remove('hiden');
    headerContainer.classList.add('show-flex');
  };

  const hide = () => {
    if (headerContainer.classList.contains('show-flex') || headerContainer.classList.contains('shown')) headerContainer.classList.remove('show-flex');
    headerContainer.classList.add('hiden');
  };

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
  const _description = document.getElementById('task-description');
  const _priorityField = document.getElementById('priority');
  const alertSubmitTask = document.getElementById('alert-submit-task');

  const show = () => {
    editTaskDom.hide();
    newProjectDom.hide();
    addTaskWindow.classList.add('shown');
    addTaskWindow.classList.remove('hiden');
  };

  const hide = () => {
    clear();
    if (addTaskWindow.classList.contains('shown')) addTaskWindow.classList.remove('shown');
    addTaskWindow.classList.add('hiden');
  };

  const clear = () => {
    _nameField.value = '';
    _dueDateField.value = '';
    _priorityField.value = '';
  };

  const submitTask = () => {
    if (_nameField.value !== '' && _dueDateField.value !== '' && _priorityField.value !== '') {
      const name = _nameField.value;
      const dueDate = _dueDateField.value;
      const priority = _priorityField.value;
      const description = _description.value;

      createNewTask(name, dueDate, priority, description);
      hide();
    } else {
      alertSubmitTask.classList.remove('alert');
      alertSubmitTask.classList.add('alert-show');
      setTimeout(() => {
        alertSubmitTask.classList.remove('alert-show');
        alertSubmitTask.classList.add('alert');
      }, 1500);
    }
  };

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

  const show = (index) => {
    newProjectDom.hide();
    newTaskDom.hide();
    editTaskWindow.classList.add('shown');
    editTaskWindow.classList.remove('hiden');
    selectedTask = index;
  };

  const hide = () => {
    clear();
    editTaskWindow.classList.remove('shown');
    editTaskWindow.classList.add('hiden');
  };

  const clear = () => {
    _nameField.value = '';
    _dueDateField.value = '';
    _priorityField.value = '';
  };

  const updateTask = () => {
    if (_nameField.value !== '' && _dueDateField.value !== '' && _priorityField.value !== '') {
      const name = _nameField.value;
      const dueDate = _dueDateField.value;
      const priority = _priorityField.value;

      editTask(selectedTask, name, dueDate, priority);
      hide();
    } else {
      alertEditTask.classList.remove('alert');
      alertEditTask.classList.add('alert-show');
      setTimeout(() => {
        alertEditTask.classList.remove('alert-show');
        alertEditTask.classList.add('alert');
      }, 1500);
    }
  };

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
