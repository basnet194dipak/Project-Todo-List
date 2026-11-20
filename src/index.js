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
} from "./ui_util.js";

// three default projects
add_projects("Learn Odin project");
add_projects("Learn Python");
add_projects("Learn Machine Learning");

console.log(project_list);

function display_todo(project_idx) {}

// display the first  project from the project list
document.addEventListener("DOMContentLoaded", () => {
  display_projects(2);
});

let view_all = true;

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
