import { v4 as uuidv4 } from "uuid";
import { compareAsc, format } from "date-fns";

class Todo {
  constructor(
    title,
    description,
    dueDate,
    priority = "medium",
    notes = null,
    checklist = false,
  ) {
    this.id = uuidv4();
    this.title = title;
    this.description = description;
    this.dueDate = format(new Date(dueDate), "yyyy-MM-dd");
    this.priority = priority;
    this.notes = notes;
    this.checklist = checklist || false;
  }
  // method-1:
  change_title(new_title) {
    this.title = new_title;
  }
  // method-2:
  change_description(new_description) {
    this.description = new_description;
  }
  // method-3:
  change_dueDate(new_duedate) {
    this.dueDate = format(new Date(new_duedate), "yyyy-MM-dd");
  }
  // method-4:
  change_priority(new_priority) {
    this.priority = new_priority;
  }
  // method-5:
  change_note(new_note) {
    this.notes = new_note;
  }
  // method-6:
  update_check_list(new_check_list) {
    this.checklist = new_check_list;
  }
}
export { Todo };
