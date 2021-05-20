/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DomFunctionality.js":
/*!*********************************!*\
  !*** ./src/DomFunctionality.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newProjectDom\": () => (/* binding */ newProjectDom),\n/* harmony export */   \"displayHeader\": () => (/* binding */ displayHeader),\n/* harmony export */   \"newTaskDom\": () => (/* binding */ newTaskDom),\n/* harmony export */   \"editTaskDom\": () => (/* binding */ editTaskDom)\n/* harmony export */ });\n/* harmony import */ var _Logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logic */ \"./src/Logic.js\");\n/* eslint-disable no-use-before-define */\n\n/* eslint-disable no-alert */\n\n/* eslint-disable import/no-cycle */\n\n/* eslint-disable no-underscore-dangle */\n\n\nvar newProjectDom = function () {\n  var addProjectBtn = document.querySelector('#add-project');\n  var submitProjectBtn = document.getElementById('submit-project');\n  var cancelSubmitProjectBtn = document.getElementById('cancel-submit-project');\n  var submitProjectWindow = document.querySelector('.submit-project-window');\n\n  var _nameField = document.getElementById('project-name');\n\n  var _descriptionField = document.getElementById('project-description');\n\n  var alertSubmitProject = document.getElementById('alert-submit-project');\n\n  var clear = function clear() {\n    _nameField.value = '';\n    _descriptionField.value = '';\n  };\n\n  var hide = function hide() {\n    clear();\n    submitProjectWindow.style.display = 'none';\n  };\n\n  var show = function show() {\n    editTaskDom.hide();\n    newTaskDom.hide();\n    submitProjectWindow.style.display = 'block';\n  };\n\n  var submitProject = function submitProject() {\n    if (_nameField.value !== '' && _descriptionField.value !== '') {\n      var name = _nameField.value;\n      var description = _descriptionField.value;\n      (0,_Logic__WEBPACK_IMPORTED_MODULE_0__.createNewProject)(name, description);\n      clear();\n      hide();\n    } else {\n      alertSubmitProject.style.display = 'block';\n      setTimeout(function () {\n        alertSubmitProject.style.display = 'none';\n      }, 1500);\n    }\n  };\n\n  return {\n    addProjectBtn: addProjectBtn,\n    cancelSubmitProjectBtn: cancelSubmitProjectBtn,\n    submitProjectBtn: submitProjectBtn,\n    show: show,\n    hide: hide,\n    submitProject: submitProject\n  };\n}();\n\nvar displayHeader = function () {\n  var headerContainer = document.querySelector('.active-project-container');\n\n  var show = function show() {\n    headerContainer.style.display = 'flex';\n  };\n\n  var hide = function hide() {\n    headerContainer.style.display = 'none';\n  };\n\n  return {\n    show: show,\n    hide: hide\n  };\n}();\n\nvar newTaskDom = function () {\n  var addTaskBtn = document.querySelector('.add-task');\n  var addTaskWindow = document.getElementById('submit-task-window');\n  var submitTaskBtn = document.getElementById('submit-task');\n  var cancelTaskBtn = document.getElementById('cancel-submit-task');\n\n  var _nameField = document.getElementById('task-name');\n\n  var _dueDateField = document.getElementById('task-due-date');\n\n  var _description = document.getElementById('task-description');\n\n  var _priorityField = document.getElementById('priority');\n\n  var alertSubmitTask = document.getElementById('alert-submit-task');\n\n  var show = function show() {\n    editTaskDom.hide();\n    newProjectDom.hide();\n    addTaskWindow.style.display = 'block';\n  };\n\n  var hide = function hide() {\n    clear();\n    addTaskWindow.style.display = 'none';\n  };\n\n  var clear = function clear() {\n    _nameField.value = '';\n    _dueDateField.value = '';\n    _priorityField.value = '';\n  };\n\n  var submitTask = function submitTask() {\n    if (_nameField.value !== '' && _dueDateField.value !== '' && _priorityField.value !== '') {\n      var name = _nameField.value;\n      var dueDate = _dueDateField.value;\n      var priority = _priorityField.value;\n      var description = _description.value;\n      (0,_Logic__WEBPACK_IMPORTED_MODULE_0__.createNewTask)(name, dueDate, priority, description);\n      hide();\n    } else {\n      alertSubmitTask.style.display = 'block';\n      setTimeout(function () {\n        alertSubmitTask.style.display = 'none';\n      }, 1500);\n    }\n  };\n\n  return {\n    addTaskBtn: addTaskBtn,\n    addTaskWindow: addTaskWindow,\n    submitTaskBtn: submitTaskBtn,\n    cancelTaskBtn: cancelTaskBtn,\n    submitTask: submitTask,\n    show: show,\n    hide: hide\n  };\n}();\n\nvar editTaskDom = function () {\n  var editTaskWindow = document.getElementById('edit-task-window');\n  var updateTaskBtn = document.getElementById('update-task');\n  var cancelUpdateBtn = document.getElementById('cancel-update-task');\n\n  var _nameField = document.getElementById('edit-task-name');\n\n  var _dueDateField = document.getElementById('edit-task-due-date');\n\n  var _priorityField = document.getElementById('edit-priority');\n\n  var alertEditTask = document.getElementById('alert-edit-task');\n  var selectedTask;\n\n  var show = function show(index) {\n    newProjectDom.hide();\n    newTaskDom.hide();\n    editTaskWindow.style.display = 'block';\n    selectedTask = index;\n  };\n\n  var hide = function hide() {\n    clear();\n    editTaskWindow.style.display = 'none';\n  };\n\n  var clear = function clear() {\n    _nameField.value = '';\n    _dueDateField.value = '';\n    _priorityField.value = '';\n  };\n\n  var updateTask = function updateTask() {\n    if (_nameField.value !== '' && _dueDateField.value !== '' && _priorityField.value !== '') {\n      var name = _nameField.value;\n      var dueDate = _dueDateField.value;\n      var priority = _priorityField.value;\n      (0,_Logic__WEBPACK_IMPORTED_MODULE_0__.editTask)(selectedTask, name, dueDate, priority);\n      hide();\n    } else {\n      alertEditTask.style.display = 'block';\n      setTimeout(function () {\n        alertEditTask.style.display = 'none';\n      }, 1500);\n    }\n  };\n\n  return {\n    updateTaskBtn: updateTaskBtn,\n    cancelUpdateBtn: cancelUpdateBtn,\n    show: show,\n    hide: hide,\n    updateTask: updateTask\n  };\n}();\n\n\n\n//# sourceURL=webpack://to-do-list/./src/DomFunctionality.js?");

/***/ }),

/***/ "./src/DynamicListener.js":
/*!********************************!*\
  !*** ./src/DynamicListener.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProjectListeners\": () => (/* binding */ addProjectListeners),\n/* harmony export */   \"addTasksListeners\": () => (/* binding */ addTasksListeners)\n/* harmony export */ });\n/* harmony import */ var _Logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logic */ \"./src/Logic.js\");\n/* harmony import */ var _DomFunctionality__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DomFunctionality */ \"./src/DomFunctionality.js\");\n/* eslint-disable func-names */\n\n/* eslint-disable import/no-cycle */\n\n\n\nfunction addProjectListeners() {\n  var projectElements = document.querySelectorAll('.single-project-container h3');\n  var deleteProjectBtn = document.querySelectorAll('.delete-project-btn');\n  projectElements.forEach(function (project) {\n    project.addEventListener('click', function () {\n      var index = this.parentNode.getAttribute('data-index');\n      (0,_Logic__WEBPACK_IMPORTED_MODULE_0__.setActiveProject)(index);\n    });\n  });\n  deleteProjectBtn.forEach(function (project) {\n    project.addEventListener('click', function () {\n      var index = this.parentNode.getAttribute('data-index');\n      (0,_Logic__WEBPACK_IMPORTED_MODULE_0__.deleteProject)(index);\n    });\n  });\n}\n\nfunction addTasksListeners() {\n  var completeTaskBtn = document.querySelectorAll('.task-title-container');\n  var deleteTaskBtn = document.querySelectorAll('.delete-task');\n  var editTaskBtn = document.querySelectorAll('.edit-task');\n  deleteTaskBtn.forEach(function (project) {\n    project.addEventListener('click', function () {\n      var index = this.parentNode.getAttribute('data-index');\n      (0,_Logic__WEBPACK_IMPORTED_MODULE_0__.deleteTask)(index);\n    });\n  });\n  editTaskBtn.forEach(function (project) {\n    project.addEventListener('click', function () {\n      var index = this.parentNode.getAttribute('data-index'); // grab the index of the clicked task\n\n      _DomFunctionality__WEBPACK_IMPORTED_MODULE_1__.editTaskDom.show(index);\n    });\n  });\n  completeTaskBtn.forEach(function (project) {\n    project.addEventListener('click', function () {\n      var index = this.parentNode.getAttribute('data-index');\n      (0,_Logic__WEBPACK_IMPORTED_MODULE_0__.updateTaskStatus)(index);\n    });\n  });\n}\n\n\n\n//# sourceURL=webpack://to-do-list/./src/DynamicListener.js?");

/***/ }),

/***/ "./src/Logic.js":
/*!**********************!*\
  !*** ./src/Logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createNewProject\": () => (/* binding */ createNewProject),\n/* harmony export */   \"deleteProject\": () => (/* binding */ deleteProject),\n/* harmony export */   \"setActiveProject\": () => (/* binding */ setActiveProject),\n/* harmony export */   \"activeProject\": () => (/* binding */ activeProject),\n/* harmony export */   \"createNewTask\": () => (/* binding */ createNewTask),\n/* harmony export */   \"deleteTask\": () => (/* binding */ deleteTask),\n/* harmony export */   \"editTask\": () => (/* binding */ editTask),\n/* harmony export */   \"updateTaskStatus\": () => (/* binding */ updateTaskStatus),\n/* harmony export */   \"updateUI\": () => (/* binding */ updateUI)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ \"./src/Project.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Task */ \"./src/Task.js\");\n/* harmony import */ var _Render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Render */ \"./src/Render.js\");\n/* harmony import */ var _DomFunctionality__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DomFunctionality */ \"./src/DomFunctionality.js\");\n/* eslint-disable no-return-assign */\n\n/* eslint-disable no-unused-expressions */\n\n/* eslint-disable no-use-before-define */\n\n/* eslint-disable import/no-cycle */\n\n\n\n\n\n\nvar createNewProject = function createNewProject(name, description) {\n  resetActiveProject();\n  ___WEBPACK_IMPORTED_MODULE_0__.allProjects.push((0,_Project__WEBPACK_IMPORTED_MODULE_1__.newProject)(name, description));\n  updateUI();\n  (0,___WEBPACK_IMPORTED_MODULE_0__.setLocalMemory)(___WEBPACK_IMPORTED_MODULE_0__.allProjects);\n  _DomFunctionality__WEBPACK_IMPORTED_MODULE_4__.displayHeader.show();\n};\n\nvar deleteProject = function deleteProject(index) {\n  if (___WEBPACK_IMPORTED_MODULE_0__.allProjects[index].active) {\n    ___WEBPACK_IMPORTED_MODULE_0__.allProjects[0].active = true;\n  }\n\n  if (___WEBPACK_IMPORTED_MODULE_0__.allProjects.length === 1) {\n    ___WEBPACK_IMPORTED_MODULE_0__.allProjects.splice(index, 1);\n    updateUI();\n    _DomFunctionality__WEBPACK_IMPORTED_MODULE_4__.displayHeader.hide();\n  }\n\n  if (___WEBPACK_IMPORTED_MODULE_0__.allProjects.length > 1) {\n    ___WEBPACK_IMPORTED_MODULE_0__.allProjects.splice(index, 1);\n    updateUI();\n  }\n\n  (0,___WEBPACK_IMPORTED_MODULE_0__.setLocalMemory)(___WEBPACK_IMPORTED_MODULE_0__.allProjects);\n};\n\nvar resetActiveProject = function resetActiveProject() {\n  ___WEBPACK_IMPORTED_MODULE_0__.allProjects.forEach(function (project) {\n    return project.active = false;\n  });\n};\n\nvar setActiveProject = function setActiveProject(index) {\n  resetActiveProject();\n  ___WEBPACK_IMPORTED_MODULE_0__.allProjects[index].active = true;\n  updateUI();\n  (0,___WEBPACK_IMPORTED_MODULE_0__.setLocalMemory)(___WEBPACK_IMPORTED_MODULE_0__.allProjects);\n};\n\nvar activeProject = function activeProject() {\n  var activeProject = ___WEBPACK_IMPORTED_MODULE_0__.allProjects.find(function (project) {\n    return project.active === true;\n  });\n  return activeProject;\n};\n\nvar createNewTask = function createNewTask(name, dueDate, priority, description) {\n  activeProject().tasks.push((0,_Task__WEBPACK_IMPORTED_MODULE_2__.newTask)(name, dueDate, priority, description));\n  (0,_Render__WEBPACK_IMPORTED_MODULE_3__.renderTasks)();\n  (0,___WEBPACK_IMPORTED_MODULE_0__.setLocalMemory)(___WEBPACK_IMPORTED_MODULE_0__.allProjects);\n};\n\nvar deleteTask = function deleteTask(index) {\n  activeProject().tasks.splice(index, 1);\n  updateUI();\n  (0,___WEBPACK_IMPORTED_MODULE_0__.setLocalMemory)(___WEBPACK_IMPORTED_MODULE_0__.allProjects);\n};\n\nvar editTask = function editTask(index, name, dueDate, priority) {\n  activeProject().tasks[index].name = name;\n  activeProject().tasks[index].dueDate = dueDate;\n  activeProject().tasks[index].priority = priority;\n  updateUI();\n  (0,___WEBPACK_IMPORTED_MODULE_0__.setLocalMemory)(___WEBPACK_IMPORTED_MODULE_0__.allProjects);\n};\n\nvar updateTaskStatus = function updateTaskStatus(index) {\n  activeProject().tasks[index].complete ? activeProject().tasks[index].complete = false : activeProject().tasks[index].complete = true;\n  updateUI();\n  (0,___WEBPACK_IMPORTED_MODULE_0__.setLocalMemory)(___WEBPACK_IMPORTED_MODULE_0__.allProjects);\n};\n\nvar updateUI = function updateUI() {\n  (0,_Render__WEBPACK_IMPORTED_MODULE_3__.renderProjects)();\n  (0,_Render__WEBPACK_IMPORTED_MODULE_3__.renderHeader)();\n  (0,_Render__WEBPACK_IMPORTED_MODULE_3__.renderTasks)();\n  ___WEBPACK_IMPORTED_MODULE_0__.allProjects === [] ? _DomFunctionality__WEBPACK_IMPORTED_MODULE_4__.displayHeader.hide() : _DomFunctionality__WEBPACK_IMPORTED_MODULE_4__.displayHeader.show();\n};\n\n\n\n//# sourceURL=webpack://to-do-list/./src/Logic.js?");

/***/ }),

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newProject\": () => (/* binding */ newProject)\n/* harmony export */ });\n/* eslint-disable import/prefer-default-export */\nvar newProject = function newProject(name, description) {\n  var tasks = [];\n  var active = true;\n  return {\n    name: name,\n    description: description,\n    tasks: tasks,\n    active: active\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./src/Project.js?");

/***/ }),

/***/ "./src/Render.js":
/*!***********************!*\
  !*** ./src/Render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderProjects\": () => (/* binding */ renderProjects),\n/* harmony export */   \"renderHeader\": () => (/* binding */ renderHeader),\n/* harmony export */   \"renderTasks\": () => (/* binding */ renderTasks)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n/* harmony import */ var _DynamicListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DynamicListener */ \"./src/DynamicListener.js\");\n/* harmony import */ var _Logic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Logic */ \"./src/Logic.js\");\n/* eslint-disable import/no-cycle */\n\n\n\n\nvar renderProjects = function renderProjects() {\n  var projectList = document.getElementById('project-list');\n  projectList.innerHTML = '';\n  ___WEBPACK_IMPORTED_MODULE_0__.allProjects.forEach(function (project, index) {\n    var singleProjectContainer = document.createElement('div');\n    singleProjectContainer.classList.add('single-project-container');\n    singleProjectContainer.setAttribute('data-index', index);\n\n    if (project.active === true) {\n      singleProjectContainer.classList.add('active-project');\n    }\n\n    var projectTitle = document.createElement('h3');\n    projectTitle.innerText = project.name;\n    var deleteProjectBtn = document.createElement('button');\n    deleteProjectBtn.innerText = 'X';\n    deleteProjectBtn.classList.add('delete-project-btn');\n    singleProjectContainer.appendChild(projectTitle);\n    singleProjectContainer.appendChild(deleteProjectBtn);\n    projectList.appendChild(singleProjectContainer);\n  });\n  (0,_DynamicListener__WEBPACK_IMPORTED_MODULE_1__.addProjectListeners)();\n};\n\nvar renderHeader = function renderHeader() {\n  var activeProjectDetails = document.querySelector('.active-project-description');\n  activeProjectDetails.innerHTML = '';\n\n  if ((0,_Logic__WEBPACK_IMPORTED_MODULE_2__.activeProject)()) {\n    var activeTitle = document.createElement('h3');\n    activeTitle.innerText = (0,_Logic__WEBPACK_IMPORTED_MODULE_2__.activeProject)().name;\n    var activeDescription = document.createElement('h5');\n    activeDescription.innerText = (0,_Logic__WEBPACK_IMPORTED_MODULE_2__.activeProject)().description;\n    activeProjectDetails.appendChild(activeTitle);\n    activeProjectDetails.appendChild(activeDescription);\n  }\n};\n\nvar renderTasks = function renderTasks() {\n  var taskContainer = document.querySelector('.task-list-container');\n  taskContainer.innerHTML = '';\n\n  if ((0,_Logic__WEBPACK_IMPORTED_MODULE_2__.activeProject)()) {\n    (0,_Logic__WEBPACK_IMPORTED_MODULE_2__.activeProject)().tasks.forEach(function (task, index) {\n      var singleTask = document.createElement('div');\n      singleTask.classList.add('single-task-container');\n      singleTask.setAttribute('data-index', index);\n\n      if (task.complete === true) {\n        singleTask.classList.add('completed-task');\n      }\n\n      var titleContainer = document.createElement('div');\n      titleContainer.classList.add('task-title-container');\n      var circle = document.createElement('span');\n      circle.classList.add('dot');\n      var taskTitle = document.createElement('h5');\n      taskTitle.innerText = task.name;\n      var taskDescription = document.createElement('h6');\n      taskDescription.innerHTML = task.description;\n      var taskPriority = document.createElement('h6');\n      taskPriority.classList.add('task-priority');\n      taskPriority.innerText = task.priority;\n      var taskDueDate = document.createElement('h6');\n      taskDueDate.innerText = task.dueDate;\n      var editTaskBtn = document.createElement('button');\n      editTaskBtn.innerText = 'Edit';\n      editTaskBtn.classList.add('edit-task');\n      var deleteTaskBtn = document.createElement('button');\n      deleteTaskBtn.innerText = 'X';\n      deleteTaskBtn.classList.add('delete-task');\n      titleContainer.appendChild(circle);\n      titleContainer.appendChild(taskTitle);\n      titleContainer.appendChild(taskDescription);\n      titleContainer.appendChild(taskPriority);\n      titleContainer.appendChild(taskDueDate);\n      singleTask.appendChild(titleContainer);\n      singleTask.appendChild(editTaskBtn);\n      singleTask.appendChild(deleteTaskBtn);\n      taskContainer.appendChild(singleTask);\n    });\n  }\n\n  (0,_DynamicListener__WEBPACK_IMPORTED_MODULE_1__.addTasksListeners)();\n};\n\n\n\n//# sourceURL=webpack://to-do-list/./src/Render.js?");

/***/ }),

/***/ "./src/StaticListener.js":
/*!*******************************!*\
  !*** ./src/StaticListener.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DomFunctionality__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DomFunctionality */ \"./src/DomFunctionality.js\");\n/* eslint-disable import/no-cycle */\n\n_DomFunctionality__WEBPACK_IMPORTED_MODULE_0__.newProjectDom.addProjectBtn.addEventListener('click', _DomFunctionality__WEBPACK_IMPORTED_MODULE_0__.newProjectDom.show);\n_DomFunctionality__WEBPACK_IMPORTED_MODULE_0__.newProjectDom.cancelSubmitProjectBtn.addEventListener('click', _DomFunctionality__WEBPACK_IMPORTED_MODULE_0__.newProjectDom.hide);\n_DomFunctionality__WEBPACK_IMPORTED_MODULE_0__.newProjectDom.submitProjectBtn.addEventListener('click', _DomFunctionality__WEBPACK_IMPORTED_MODULE_0__.newProjectDom.submitProject);\n_DomFunctionality__WEBPACK_IMPORTED_MODULE_0__.newTaskDom.addTaskBtn.addEventListener('click', _DomFunctionality__WEBPACK_IMPORTED_MODULE_0__.newTaskDom.show);\n_DomFunctionality__WEBPACK_IMPORTED_MODULE_0__.newTaskDom.submitTaskBtn.addEventListener('click', _DomFunctionality__WEBPACK_IMPORTED_MODULE_0__.newTaskDom.submitTask);\n_DomFunctionality__WEBPACK_IMPORTED_MODULE_0__.newTaskDom.cancelTaskBtn.addEventListener('click', _DomFunctionality__WEBPACK_IMPORTED_MODULE_0__.newTaskDom.hide);\n_DomFunctionality__WEBPACK_IMPORTED_MODULE_0__.editTaskDom.updateTaskBtn.addEventListener('click', _DomFunctionality__WEBPACK_IMPORTED_MODULE_0__.editTaskDom.updateTask);\n_DomFunctionality__WEBPACK_IMPORTED_MODULE_0__.editTaskDom.cancelUpdateBtn.addEventListener('click', _DomFunctionality__WEBPACK_IMPORTED_MODULE_0__.editTaskDom.hide);\n\n//# sourceURL=webpack://to-do-list/./src/StaticListener.js?");

/***/ }),

/***/ "./src/Task.js":
/*!*********************!*\
  !*** ./src/Task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newTask\": () => (/* binding */ newTask)\n/* harmony export */ });\n/* eslint-disable import/prefer-default-export */\nvar newTask = function newTask(name, dueDate, priority, description) {\n  var complete = false;\n  return {\n    name: name,\n    dueDate: dueDate,\n    priority: priority,\n    complete: complete,\n    description: description\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./src/Task.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"allProjects\": () => (/* binding */ allProjects),\n/* harmony export */   \"setLocalMemory\": () => (/* binding */ setLocalMemory)\n/* harmony export */ });\n/* harmony import */ var _StaticListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StaticListener */ \"./src/StaticListener.js\");\n/* harmony import */ var _Logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Logic */ \"./src/Logic.js\");\n/* eslint-disable import/no-mutable-exports */\n\n/* eslint-disable import/no-cycle */\n\n\nvar allProjects = []; // Default project a helper\n\nif (!localStorage.getItem('AllProjects')) {\n  (0,_Logic__WEBPACK_IMPORTED_MODULE_1__.createNewProject)('Sample Project', 'This is my first project');\n  (0,_Logic__WEBPACK_IMPORTED_MODULE_1__.createNewTask)('This is a sample task', '2021-04-15', 'High');\n  (0,_Logic__WEBPACK_IMPORTED_MODULE_1__.createNewTask)('On the left side projects are listed', '2021-04-15', 'Low');\n  (0,_Logic__WEBPACK_IMPORTED_MODULE_1__.createNewTask)('On the right you see the tasks of the selected project', '2021-04-15', 'High');\n  (0,_Logic__WEBPACK_IMPORTED_MODULE_1__.createNewTask)('By clicking on the task you can mark it as done', '2021-04-15', 'Low');\n} // Local Storage\n\n\nvar getFromLocalMemory = function getFromLocalMemory() {\n  var originalProjects = JSON.parse(localStorage.getItem('AllProjects'));\n\n  if (originalProjects) {\n    allProjects = originalProjects;\n    (0,_Logic__WEBPACK_IMPORTED_MODULE_1__.updateUI)();\n  }\n};\n\nvar setLocalMemory = function setLocalMemory(projects) {\n  if (projects !== []) {\n    var myProjectsLocal = JSON.stringify(projects);\n    localStorage.setItem('AllProjects', myProjectsLocal);\n  }\n};\n\ngetFromLocalMemory();\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;