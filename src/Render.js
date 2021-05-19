import { allProjects } from "./Index";
import { addProjectListeners, addTasksListeners } from "./DynamicListener";
import { activeProject } from './Logic'

function renderProjects() {
    const projectList = document.getElementById('project-list');

    projectList.innerHTML = '';

    allProjects.forEach((project, index) => {
    const singleProjectContainer = document.createElement('div');
    singleProjectContainer.classList.add('single-project-container');
    singleProjectContainer.setAttribute('data-index', index)

    if (project.active === true) {
        singleProjectContainer.classList.add('active-project');
    }

    const projectTitle = document.createElement('h3')
    projectTitle.innerText = project.name;

    const deleteProjectBtn = document.createElement('button');
    deleteProjectBtn.innerText = 'X';
    deleteProjectBtn.classList.add('delete-project-btn')



    singleProjectContainer.appendChild(projectTitle)
    singleProjectContainer.appendChild(deleteProjectBtn)
    projectList.appendChild(singleProjectContainer);
    })

    addProjectListeners();
}

function renderHeader() {
    const activeProjectDetails = document.querySelector('.active-project-description')

    activeProjectDetails.innerHTML = "";


    if(activeProject()) {
        const activeTitle = document.createElement('h3');
        activeTitle.innerText = activeProject().name;

        const activeDescription = document.createElement('h5');
        activeDescription.innerText = activeProject().description;

        activeProjectDetails.appendChild(activeTitle);
        activeProjectDetails.appendChild(activeDescription);
    }
}

function renderTasks() {
        const taskContainer = document.querySelector('.task-list-container')

        taskContainer.innerHTML = '';

    if(activeProject()) {
        activeProject().tasks.forEach((task, index) => {
            const singleTask = document.createElement('div');
            singleTask.classList.add('single-task-container');
            singleTask.setAttribute('data-index', index);

            if (task.complete === true) {
                singleTask.classList.add('completed-task');
            }

            const titleContainer = document.createElement('div');
            titleContainer.classList.add('task-title-container');

            const circle = document.createElement('span');
            circle.classList.add('dot');

            const taskTitle = document.createElement('h5');
            taskTitle.innerText = task.name;

            const taskPriority = document.createElement('h6');
            taskPriority.classList.add('task-priority')
            taskPriority.innerText = task.priority;

            const taskDueDate = document.createElement('h6');
            taskDueDate.innerText = task.dueDate;

            const editTaskBtn = document.createElement('button');
            editTaskBtn.innerText = 'Edit';
            editTaskBtn.classList.add('edit-task');

            const deleteTaskBtn = document.createElement('button')
            deleteTaskBtn.innerText = 'X';
            deleteTaskBtn.classList.add('delete-task')

            titleContainer.appendChild(circle)
            titleContainer.appendChild(taskTitle)
            titleContainer.appendChild(taskPriority)
            titleContainer.appendChild(taskDueDate)
            singleTask.appendChild(titleContainer)
            singleTask.appendChild(editTaskBtn)
            singleTask.appendChild(deleteTaskBtn)
            taskContainer.appendChild(singleTask)

        })
    }  
    
    addTasksListeners();  
       
}



export { renderProjects, renderHeader, renderTasks }