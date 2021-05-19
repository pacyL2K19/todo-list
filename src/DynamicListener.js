import { deleteProject, setActiveProject, deleteTask, updateTaskStatus } from './Logic'
import { editTaskDom } from './DomFunctionality'

function addProjectListeners() {
    const projectElements = document.querySelectorAll('.single-project-container h3')
    const deleteProjectBtn = document.querySelectorAll('.delete-project-btn');

    projectElements.forEach((project) => { project.addEventListener('click', function() {
        let index = this.parentNode.getAttribute('data-index');
        setActiveProject(index);
    })})
    
    deleteProjectBtn.forEach((project) => {project.addEventListener('click', function(){
        let index = this.parentNode.getAttribute('data-index');
        deleteProject(index)
    })})
}


function addTasksListeners() {
    const completeTaskBtn = document.querySelectorAll('.task-title-container');
    const deleteTaskBtn = document.querySelectorAll('.delete-task');
    const editTaskBtn = document.querySelectorAll('.edit-task');

    deleteTaskBtn.forEach((project) => { project.addEventListener('click', function() {
        let index = this.parentNode.getAttribute('data-index');
        deleteTask(index);
    })})

    editTaskBtn.forEach((project) => { project.addEventListener('click', function(){
        let index = this.parentNode.getAttribute('data-index'); // grab the index of the clicked task
        editTaskDom.show(index)
    })})

    completeTaskBtn.forEach((project) => { project.addEventListener('click', function(){
        let index = this.parentNode.getAttribute('data-index');
        updateTaskStatus(index)
    })})
}

export { addProjectListeners, addTasksListeners }