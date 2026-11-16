import {add_projects, delete_projects, add_todo, delete_todo, project_list} from "./util.js"

// three default projects 
add_projects("Learn Odin project")
add_projects("Learn Python")
add_projects("Learn Machine Learning")

console.log(project_list)

const form = document.getElementById("project-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const projectName = document.getElementById("project-name").value;

    console.log(projectName);

    // adding project to the project list 
    add_projects(projectName)
});

// display the project list
let available_projects = document.querySelector("#available_projects")
document.addEventListener("DOMContentLoaded",()=>{
  for (let i = 0; i<project_list.project_list.length; i++)
  {
    let hello = document.createElement("div")
    console.log(i)
    let project = project_list.project_list[i] 
    hello.innerText = `${project.name}`
    available_projects.appendChild(hello)
  }
})

