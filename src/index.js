import render from './scripts/dom/render';
import './styles/styles.css';
import newProject from './scripts/Project';

if (!localStorage.getItem('projects')) {
  localStorage.setItem('projects', JSON.stringify([newProject('Default Project')]));
}
render();
