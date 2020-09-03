import projects from './Projects';
import jobs from './Jobs';
import skills from './Skills';

const projectsById = projects.reduce((obj, project) => {
  obj[project.id] = project;
  return obj;
}, {});

export { projects, projectsById, jobs, skills };
