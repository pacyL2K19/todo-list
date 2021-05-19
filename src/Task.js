/* eslint-disable import/prefer-default-export */
export const newTask = (name, dueDate, priority) => {
  const complete = false;
  return {
    name,
    dueDate,
    priority,
    complete,
  };
};