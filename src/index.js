import "./style.css";
import {
  display_projects,
  re_display_ui,
  view_all_projects,
  view_few,
  project_list,
} from "./ui_util.js";

import { project_add, todo_add } from "./fourm_util.js";

import { storageAvailable } from "./save.js";

// view only two projects by default;
view_few(2);

// view all the projects
view_all_projects();
// add and display the projects
project_add();

// add and view the todo app of respective projects
todo_add();

if (storageAvailable("localStorage")) {
  console.log("Yippee! We can use localStorage awesomeness");
} else {
  console.log("Too bad, no localStorage for us");
}
