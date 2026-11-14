import { v4 as uuidv4 } from "uuid";
// import { compareAsc, format } from "date-fns";

class Todo {
  constructor(
    project_id,
    title,
    description,
    dueDate,
    priority = "medium",
    notes = null,
    checklist = false,
  ) {
    this.id = uuidv4();
    this.project_id = project_id;
    this.title = title;
    this.description = description;
    this.dueDate = format(new Date(dueDate), "yyyy-MM-dd");
    this.priority = priority;
    this.notes = notes;
    this.checklist = checklist;
  }

  get priority() {
    return this.priority;
  }
  set priority(prior) {
    let prior_list = ["high", "medium", "low"];
    if (prior in prior_list) {
      this.priority = prior;
      console.log(`new priority: ${this.priority}`);
    } else {
      this.priority = "medium";
      console.log("Setting to default priority medium");
      return "Priority should be either: high or medium or low";
    }
  }

  get checklist() {
    return this.checklist;
  }

  set checklist(new_check) {
    if (new_check != true || new_check != false) {
      this.checklist = false;
      console.log("setting to default checklist false");
    } else {
      this.checklist = new_check;
    }
  }

  get dueDate() {
    return this.dueDate;
  }

  set dueDate(dates) {
    var date = Date.now();
    if (dates < format(new Date(date), "yyyy-MM-dd")) {
      this.dueDate = date;
    } else {
      this.dueDate = format(new Date(dates), "yyyy-MM-dd");
    }
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
