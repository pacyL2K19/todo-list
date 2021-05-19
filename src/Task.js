export const newTask = (name, dueDate, priority) => {
    let complete = false;
    return {
        name,
        dueDate,
        priority,
        complete
    }
}