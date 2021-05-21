import { newProject } from '../Project';

const project = newProject('Learn', 'Test description');

test('It has a name of Learn', () => {
  expect(project.name).toBe('Learn');
});

test('It has a list of tasks which is empty', () => {
  expect(project).toHaveProperty('tasks');
  expect(project.tasks.length).toBe(0);
});

test('It is active project when it is created', () => {
  expect(project.active).toBe(true);
});
