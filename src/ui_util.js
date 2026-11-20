import {
  add_projects,
  delete_projects,
  add_todo,
  delete_todo,
  project_list,
} from "./util.js";

let view_all = true;

// three default projects
add_projects("Learn Odin project");
add_projects("Learn Python");
add_projects("Learn Machine Learning");

function delete_project_ui(idx) {
  delete_projects(idx);
  re_display_ui();
}

function display_projects(n) {
  let available_projects = document.querySelector("#available_projects");

  available_projects.innerHTML = "";
  let i = 0;

  let project_dictionary = project_list.project_list;
  for (const [key, value] of Object.entries(project_dictionary)) {
    let hello = document.createElement("div");

    let displayButton = document.createElement("button");
    displayButton.innerText = value.name;

    displayButton.addEventListener("click", () => {
      display_todo(key);
    });

    let deleteButton = document.createElement("button");
    deleteButton.innerText = "delete_project";

    deleteButton.addEventListener("click", () => {
      delete_project_ui(key);
    });

    hello.appendChild(displayButton);
    hello.appendChild(deleteButton);

    available_projects.appendChild(hello);

    if (i == n - 1) {
      break;
    } else {
      i++;
    }
  }
}

function re_display_ui() {
  let n;
  // show the latest project on top
  if (view_all === true) {
    // show the latest project on top by replacing the prev latest project by newly added project for the initial display
    n = 2;
  } else {
    n = Object.keys(project_list.project_list).length;
  }
  display_projects(n);
}

function view_all_projects() {
  // view all the available projects
  let kid = document.querySelector("#viewallprojects");

  kid.addEventListener("click", () => {
    if (view_all === true) {
      // kid.addEventListener("click", ()=>{display_projects(1)})
      display_projects(Object.keys(project_list.project_list).length);
      kid.innerHTML = `<h2> View less </h2>`;
      view_all = false;
    } else {
      display_projects(2);
      kid.innerHTML = `<h2> View all projects</h2>`;
      view_all = true;
    }
  });
}

function view_few(n) {
  // display the first  project from the project list
  document.addEventListener("DOMContentLoaded", () => {
    display_projects(n);
  });
}
export {
  display_projects,
  re_display_ui,
  view_all_projects,
  view_few,
  project_list,
};
