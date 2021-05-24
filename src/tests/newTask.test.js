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

test('It contains a dueDate property which is a string in a date format', () => {
  const dateArr = task.dueDate.split('-');
  const date = new Date(dateArr[0], dateArr[1] - 1, dateArr[2]);
  expect(date).toBeInstanceOf(Date);
});
