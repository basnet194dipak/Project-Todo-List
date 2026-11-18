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

// display list of todo from projects
function display_todo(i)
{
  let view = document.querySelector("#view_sections")
  let projects = project_list.project_list[i]

  // to be completed in future

}


function display_projects(n)
{
  let available_projects = document.querySelector("#available_projects")
  available_projects.innerHTML = ""
    for (let i = 0; i<n; i++)
    {
      let hello = document.createElement("div")
      console.log(i)
      let project = project_list.project_list[i] 
      hello.innerText = `${project.name}`
      hello.setAttribute("id",`${i}`)
      hello.setAttribute("onclick", display_todo(i))
      available_projects.appendChild(hello)
    }
}

// view all the available projects 
let kid = document.querySelector("#viewallprojects")
let view_less = true

kid.addEventListener("click",()=>{
  if (view_less === true)
  {
    // kid.addEventListener("click", ()=>{display_projects(1)})
    display_projects(1)
    kid.innerHTML = `<h2> View all projects</h2>`
    view_less = false
  }
  else{
      display_projects(project_list.project_list.length)
      kid.innerHTML = `<h2> View less </h2>`
      view_less = true
  }
    
})

// display the first  project from the project list
document.addEventListener("DOMContentLoaded", ()=>{display_projects(1)})