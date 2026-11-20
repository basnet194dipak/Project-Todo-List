import {
  add_projects,
  delete_projects,
  add_todo,
  delete_todo,
  project_list,
} from "./util.js";

import {
  display_projects,
  re_display_ui,
  view_all_projects,
  view_few,
} from "./ui_util.js";

console.log(project_list);

function display_todo(project_idx) {}

let view_all = true;
// view only two projects by default;
view_few(2);

// view all the projects
view_all_projects(view_all);

const form = document.getElementById("project-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const projectName = document.getElementById("project-name").value;

  console.log(projectName);

  // adding project to the project list
  add_projects(projectName);
  re_display_ui(view_all);
});
