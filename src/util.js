import { Project } from "./project";
import { Project_list } from "./project_list";

let project_list = new Project_list();

// add project to project_list
function add_projects(project_name) {
  let project = new Project(project_name);
  project_list.add_project(project);
}

function delete_projects(project_idx) {
  project_list.delete_project(project_idx);
}

// add todo to project
function add_todo(
  project_idx,
  title,
  description,
  dueDate,
  priority,
  notes,
  checklist,
) {
  // access the project and add todo
  project_list.project_list[project_idx].add_todo(
    title,
    description,
    dueDate,
    priority,
    notes,
    checklist,
  );
}

// delete todo to project

function delete_todo(project_idx, todo_idx) {
  project_list.project_list[project_idx].delete_todo((id = todo_idx));
}


export {add_projects, delete_projects, add_todo, delete_todo,project_list}