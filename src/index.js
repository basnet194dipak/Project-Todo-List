import { Project } from "./project";
import { Project_list } from "./project_list";

let project_list = new Project_list();

// add project to project_list

function add_projects(project_name) {
  let project = new Project(project_name);
  project_list.add_project(project);
}


function delete_project(project_idx)
{
    project_list.project_list.splice(project_idx, 1)
}


// 