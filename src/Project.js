export const newProject = (name, description) => {
    let tasks = []
    let active = true;
    return {
        name,
        description,
        tasks,
        active
    }
}