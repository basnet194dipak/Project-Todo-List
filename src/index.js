import {
  add_projects,
  delete_projects,
  add_todo,
  delete_todo,
  project_list,
} from "./util.js";

// three default projects
add_projects("Learn Odin project");
add_projects("Learn Python");
add_projects("Learn Machine Learning");

console.log(project_list);

// display list of todo from projects
function display_todo(i) {
  let view = document.querySelector("#view_sections");
  let projects = project_list.project_list[i];

  // to be completed in future
}

function display_projects(n) {
  let display_upto = project_list.project_list.length - n
  let available_projects = document.querySelector("#available_projects");
  available_projects.innerHTML = "";
  for (let i = project_list.project_list.length - 1; i >= display_upto; i--) {
    let hello = document.createElement("div");
    console.log(i);
    let project = project_list.project_list[i];
    hello.innerText = `${project.name}`;
    hello.setAttribute("id", `${i}`);
    hello.setAttribute("onclick", display_todo(i));
    available_projects.appendChild(hello);
  }
}

// view all the available projects
let kid = document.querySelector("#viewallprojects");
let view_all = true;

kid.addEventListener("click", () => {
  if (view_all === true) {
    // kid.addEventListener("click", ()=>{display_projects(1)})
    display_projects(project_list.project_list.length);
    kid.innerHTML = `<h2> View less </h2>`;
    view_all = false;
  } else {
    display_projects(2);
    kid.innerHTML = `<h2> View all projects</h2>`;
    view_all = true;
  }
});

// display the first  project from the project list
document.addEventListener("DOMContentLoaded", () => {
  display_projects(2);
});

const form = document.getElementById("project-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const projectName = document.getElementById("project-name").value;

  console.log(projectName);

  // adding project to the project list
  add_projects(projectName);
  let n; 

  // show the latest project on top
  if (view_all === true)
  {
    // show the latest project on top by replacing the prev latest project by newly added project for the initial display
    n = 2
  }
  else{
    n = project_list.project_list.length 
  }
  display_projects(n);
});