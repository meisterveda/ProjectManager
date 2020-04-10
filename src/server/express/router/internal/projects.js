const express = require('express');
const projectsRouter = express.Router();
const { getProjects, addProject, deleteProject } =

projectsRouter
    .route('/')
    .get(getProjects)
    .post(addProject);

projectsRouter
    .route('/:id')
    .delete(deleteProject);

module.exports = projectsRouter;