import setAttributes from '../setAttributes';

const createHeader = () => {
  const container = document.createElement('header');
  const h2 = document.createElement('h2');
  const addProjectButton = document.createElement('button');

  container.setAttribute('class', 'pt-5 d-flex justify-content-between');
  h2.setAttribute('class', 'text-secondary');
  setAttributes(addProjectButton, {
    class: 'btn btn-primary btn-lg shadow',
    id: 'add-project-btn',
    'data-bs-toggle': 'modal',
    'data-bs-target': '#addProject',
  });

  h2.textContent = 'ToDo List';
  addProjectButton.textContent = 'New Project';

  container.append(h2, addProjectButton);

  return container;
};

export default createHeader;