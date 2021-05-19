import setAttributes from '../setAttributes';
import { createDomElement } from '../dom/global';

const createHeader = () => {
  const container = createDomElement('header');
  const h2 = createDomElement('h2');
  const addProjectButton = createDomElement('button');

  setAttributes(container, {
    class: 'pt-5 d-flex justify-content-between',
  });
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
