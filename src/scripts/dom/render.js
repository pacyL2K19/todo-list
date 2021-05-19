import createHeader from '../components/Header';
import { deleteProjectModal, addProjectModal } from '../components/Modal';
import { addTaskModal, deleteTaskModal } from '../components/TaskModal';
import setAttributes from '../setAttributes';
import { projects, addProject } from './addProject';
import { handleUpdateProject } from './editProject';
import { handleDeleteProject } from './deleteProject';
import allProjectsMarkup from './renderProjects';
import { handleAdd } from './addTask';
import { handleUpdateTask } from './editTask';
import { handleDeleteTask } from './deleteTask';

const render = () => {
  const contentDiv = document.querySelector('#content');

  const header = createHeader();
  const addModal = addProjectModal();
  const delModal = deleteProjectModal();
  const modalAddTask = addTaskModal();
  const modalDeleteTask = deleteTaskModal();

  const wrapperDiv = document.createElement('div');
  setAttributes(wrapperDiv, { class: 'row', id: 'projects-wrapper' });

  contentDiv.append(delModal, header, addModal, modalAddTask, modalDeleteTask, wrapperDiv);
  addProject();
  handleUpdateProject();
  handleDeleteProject();
  handleUpdateTask();
  handleDeleteTask();
  handleAdd();
  allProjectsMarkup(projects);
};

export default render;
