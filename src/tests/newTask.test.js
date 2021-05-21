import { newTask } from '../Task';

const task = newTask('Jest', '12-12-2020', 'High', 'This task is for fun');

test('It contains a name of Jest', () => {
  expect(task.name).toBe('Jest');
});

test('It is uncompleted when it is created', () => {
  expect(task.complete).toBe(false);
});

test('It has all the required properties', () => {
  expect(task).toHaveProperty('name');
  expect(task).toHaveProperty('dueDate');
  expect(task).toHaveProperty('priority');
  expect(task).toHaveProperty('description');
});
