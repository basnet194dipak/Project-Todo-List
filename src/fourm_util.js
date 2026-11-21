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
  display_todo,
  project_id,
} from "./ui_util.js";

function project_add() {
  const form = document.getElementById("project-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const projectName = document.getElementById("project-name").value;

    console.log(projectName);

    // adding project to the project list
    add_projects(projectName);
    re_display_ui();
  });
}

function todo_add() {
  const to_doform = document.querySelector("#todo-form");

  to_doform.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(to_doform);
    console.log("hwello formData");
    add_todo(
      project_id,
      formData.get("title"),
      formData.get("description"),
      formData.get("dueDate"),
      formData.get("priority"),
      formData.get("notes") || null,
      formData.has("checklist"),
    );

    display_todo();
  });
}

export { project_add, todo_add };
