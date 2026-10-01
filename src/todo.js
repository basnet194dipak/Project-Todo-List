import { v4 as uuidv4 } from "uuid"
class Todo {

    constructor(title, description, dueDate, priority, notes, checklist = false) {
        this.id = uuidv4()
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.notes = notes
        this.checklist = checklist
    }

    // method-1: 

    // method-2:
    // method-3:
    // method-4:
    // method-5:
    // method-6:
}

export { Todo }

