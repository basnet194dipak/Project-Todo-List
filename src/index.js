import { Project } from "./project";
import { Project_list } from "./project_list";

let project_list = new Project_list();

// add project to project_list

function add_projects() {
  let project = new Project();
  project_list.add_project();
}
