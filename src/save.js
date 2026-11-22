import { Project_list } from "./project_list";
import { Project } from "./project";
import { Todo } from "./todo";

function save_data(project_list) {
  localStorage.setItem("projects", JSON.stringify(project_list));
}

function load_data() {
  const data = localStorage.getItem("projects");

  if (!data) {
    return new Project_list();
  }

  const project_list = JSON.parse(data);

  Object.setPrototypeOf(project_list, Project_list.prototype);

  for (const project of Object.values(project_list.project_list)) {
    Object.setPrototypeOf(project, Project.prototype);

    for (const todo of Object.values(project.todo_list)) {
      Object.setPrototypeOf(todo, Todo.prototype);
    }
  }

  return project_list;
}

export { save_data, load_data };
