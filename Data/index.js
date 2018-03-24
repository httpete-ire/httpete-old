import projects from './../Data/Projects.json';
import jobs from './../Data/Jobs.json';
import skills from './../Data/Skills.json';

const projectsById = projects.reduce((obj, project) => {
  obj[project.id] = project;
  return obj;
}, {});

export { projects, projectsById, jobs, skills };
