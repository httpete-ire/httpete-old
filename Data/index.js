import projects from './../Data/Projects.json';

const projectsById = projects.reduce((obj, project) => {
  obj[project.id] = project;
  return obj;
}, {});

export { projects, projectsById };
