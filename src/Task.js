/* eslint-disable import/prefer-default-export */
export const newTask = (name, dueDate, priority, description) => {
  const complete = false;
  return {
    name,
    dueDate,
    priority,
    complete,
    description,
  };
};