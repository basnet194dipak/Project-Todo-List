class Project_list {
  constructor() {
    this.project_list = {};
  }

  // add project to the list
  add_project(project) {
    this.project_list[project.id] = project;
  }

  // delete project from the list

  delete_project(project_id) {
    delete this.project_list[project_id];
  }

  get_project(project_id) {
    return this.project_list[project_id];
  }
}

export { Project_list };
