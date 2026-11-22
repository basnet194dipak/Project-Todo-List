import { Project } from "./project";
import { Project_list } from "./project_list";
import { save_data, load_data } from "./save.js";

let project = new Project_list();
// initially_save empty project_list to localStorage
save_data(project);

// load project_list from localStorage if available
let project_list = load_data();

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

  console.log("Check todos");
  console.log(project_idx);
  // console.log(project_list.project_list[project_idx].name )
  project_list.project_list[project_idx].add_todo(
    // project_idx,
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
  project_list.project_list[project_idx].delete_todo(todo_idx);
}

export { add_projects, delete_projects, add_todo, delete_todo, project_list };
