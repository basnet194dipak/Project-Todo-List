const fs = require("fs");
const path = require("path");

function load_project(paths) {
  // load project from the given path
}

function write_to_database(project, paths) {
  // check if path exists
  // if path doesnt exists then make a json file and write empty object {} or json object {}
  // write project in json file
}

function Save(project, paths) {
  var projects = load_project(paths);
  projects[project.id] = project;
  write_to_database(projects);
}
