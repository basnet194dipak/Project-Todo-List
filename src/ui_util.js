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

  let title = todo.title;
  let description = todo.description;
  let dueDate = todo.dueDate;
  let priority = todo.priority;
  let notes = todo.notes;
  let checklist = todo.checklist;

  let status = checklist ? "Completed" : "Incomplete";

  let view = document.querySelector("#todo_details");

  view.innerHTML = `
    <div class="todo-header">
        <button id="back_btn">← Back</button>
        <h2>${title}</h2>
        <button id="edit_todo_btn">Edit</button>
    </div>

    <section class="todo-section">
        <h3>Title</h3>
        <p>${title}</p>
    </section>

    <section class="todo-section">
        <h3>Description</h3>
        <p>${description}</p>
    </section>

    <section class="todo-section">
        <h3>Due Date</h3>
        <p>${dueDate || "No due date"}</p>
    </section>

    <section class="todo-section">
        <h3>Priority</h3>
        <p>${priority || "No priority"}</p>
    </section>

    <section class="todo-section">
        <h3>Notes</h3>
        <div>${notes || "No notes yet."}</div>
    </section>

    <div class="todo-footer">
        <h3>Status: ${status}</h3>
    </div>
  `;

  document.querySelector("#edit_todo_btn").addEventListener("click", () => {
    edit_todo(project_idx, todo_idx);
  });
}

function edit_todo(project_idx, todo_idx) {
  let todo = project_list.get_project(project_idx).get_todo(todo_idx);

  let view = document.querySelector("#todo_details");

  view.innerHTML = `
    <div class="todo-header">
        <button id="cancel_btn">← Cancel</button>
        <h2>Edit Todo</h2>
    </div>

    <section class="todo-section">
        <h3>Title</h3>
        <input type="text" id="edit_title" value="${todo.title}">
    </section>

    <section class="todo-section">
        <h3>Description</h3>
        <textarea id="edit_description">${todo.description}</textarea>
    </section>

    <section class="todo-section">
        <h3>Due Date</h3>
        <input type="date" id="edit_due_date" value="${todo.dueDate || ""}">
    </section>

    <section class="todo-section">
        <h3>Priority</h3>
        <select id="edit_priority">
            <option value="Low" ${todo.priority === "Low" ? "selected" : ""}>Low</option>
            <option value="Medium" ${todo.priority === "Medium" ? "selected" : ""}>Medium</option>
            <option value="High" ${todo.priority === "High" ? "selected" : ""}>High</option>
        </select>
    </section>

    <section class="todo-section">
        <h3>Notes</h3>
        <textarea id="edit_notes">${todo.notes || ""}</textarea>
    </section>

    <section>
        <label>
            <input type="checkbox" id="edit_checklist"
                ${todo.checklist ? "checked" : ""}>
            Completed
        </label>
    </section>

    <button id="save_todo_btn">Save</button>
  `;

  document.querySelector("#save_todo_btn").addEventListener("click", () => {
    save_todo(project_idx, todo_idx);
  });

  document.querySelector("#cancel_btn").addEventListener("click", () => {
    display_todo_indetail(project_idx, todo_idx);
  });
}

function save_todo(project_idx, todo_idx) {
  let todo = project_list.get_project(project_idx).get_todo(todo_idx);

  todo.change_title(document.querySelector("#edit_title").value);
  todo.change_description(document.querySelector("#edit_description").value);
  todo.change_dueDate(document.querySelector("#edit_due_date").value);
  todo.change_priority(document.querySelector("#edit_priority").value);
  todo.change_note(document.querySelector("#edit_notes").value);
  todo.update_check_list(document.querySelector("#edit_checklist").checked);

  // Display updated todo in read-only mode
  display_todo_indetail(project_idx, todo_idx);

  // Also refresh the todo list
  display_todo();
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
