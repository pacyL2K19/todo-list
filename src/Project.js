/* eslint-disable import/prefer-default-export */
export const newProject = (name, description) => {
  const tasks = [];
  const active = true;
  return {
    name,
    description,
    tasks,
    active,
  };
};