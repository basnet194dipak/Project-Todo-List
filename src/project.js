import { Todo } from "./todo";
import { v4 as uuidv4 } from "uuid";
class Project {
  constructor(name) {
    this.id = uuidv4();
    this.name = name;
    this.todo_list = {};
  }

  // method_1:add_todo
  add_todo(title, description, dueDate, priority, notes, checklist) {
    var todo = new Todo(
      title,
      description,
      dueDate,
      priority,
      notes,
      checklist,
    );
    this.todo_list[todo.id] = todo;
  }

  // method_2: delete_todo
  delete_todo(id) {
    delete this.todo_list[id];
  }
}

export { Project };
