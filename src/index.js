import {
  add_projects,
  delete_projects,
  add_todo,
  delete_todo,
  // project_list,
} from "./util.js";

import {
  display_projects,
  re_display_ui,
  view_all_projects,
  view_few,
  project_list,
} from "./ui_util.js";

import { project_add, todo_add } from "./fourm_util.js";

// view only two projects by default;
view_few(2);

// view all the projects
view_all_projects();
project_add();
todo_add();
