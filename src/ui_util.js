import {
  add_projects,
  delete_projects,
  add_todo,
  delete_todo,
  project_list,
} from "./util.js";

let view_all = true;
let project_id = null;
let todo_id = null;

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
      project_id = key;
      console.log(project_id, value.name);
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

function display_todo_indetail(project_idx, todo_idx) {
  let todo = project_list.get_project(project_idx).get_todo(todo_idx);
  console.log("I am here");
  let title = todo.title;
  let description = todo.description;
  let dueDate = todo.dueDate;
  let priority = todo.priority;
  let notes = todo.notes;
  let checklist = todo.checklist;

  console.log(title, description, dueDate, priority, notes, checklist);

  let view = document.querySelector("#todo_details");
  view.innerHTML = view.innerHTML = `
    <div class="todo-header">
        <button id="back_btn">← Back</button>
        <h2>${title}</h2>
        <button id="edit_todo_btn">Edit</button>
        <button id="delete_todo_btn">Delete</button>
    </div>

    <section class="todo-section">
        <div class="section-header">
            <h3>Title</h3>
            <button id="edit_title_btn">Edit</button>
        </div>
        <p id="todo_title_value">${title}</p>
    </section>

    <section class="todo-section">
        <div class="section-header">
            <h3>Description</h3>
            <button id="edit_description_btn">Edit</button>
        </div>
        <p id="todo_description">${description}</p>
    </section>

    <section class="todo-section">
        <div class="section-header">
            <h3>Due Date</h3>
            <button id="edit_due_date_btn">Change</button>
        </div>
        <p id="todo_due_date">${dueDate || "No due date"}</p>
    </section>

    <section class="todo-section">
        <div class="section-header">
            <h3>Priority</h3>
            <button id="edit_priority_btn">Change</button>
        </div>
        <p id="todo_priority">${priority || "No priority"}</p>
    </section>

    <section class="todo-section">
        <div class="section-header">
            <h3>Notes</h3>
            <button id="edit_notes_btn">Edit</button>
        </div>
        <div id="todo_notes">${notes || "No notes yet."}</div>
    </section>

    <section class="todo-section">
        <div class="section-header">
            <h3>Checklist</h3>
            <button id="edit_checklist_btn">Edit</button>
            <button id="add_checklist_item_btn">+ Add Item</button>
        </div>
    </section>

    <div class="todo-footer">
        <button id="mark_complete_btn">Mark as Complete</button>
        <button id="close_todo_btn">Close</button>
    </div>
    `;
}

function delete_todo_ui(todo_key) {
  // get the project id
  delete_todo(project_id, todo_key);
  display_todo();
}

function display_todo() {
  let view_todo = document.querySelector("#view_sections");
  view_todo.innerHTML = "";
  let project = project_list.project_list[project_id];
  let todo_list = project.todo_list;

  for (const [key, value] of Object.entries(todo_list)) {
    let hello = document.createElement("div");

    let displayButton = document.createElement("button");
    console.log(
      `todo key${key} value${value} todo_list[key]${todo_list[key]} todo_list[key].title ${todo_list[key].title}`,
    );
    displayButton.innerText = value.title;

    displayButton.addEventListener("click", () => {
      todo_id = key;
      display_todo_indetail(project_id, todo_id);
    });

    let deleteButton = document.createElement("button");
    deleteButton.innerText = "delete_todo";

    deleteButton.addEventListener("click", () => {
      todo_id = key;
      delete_todo_ui(todo_id);
    });

    hello.appendChild(displayButton);
    hello.appendChild(deleteButton);

    view_todo.appendChild(hello);
  }
}

export {
  display_projects,
  re_display_ui,
  view_all_projects,
  view_few,
  project_list,
  display_todo,
  project_id,
};
