const express = require('express');
const githubRouter = express.Router();
const { getGithub } = require('../../../controllers/external/githubController');

githubRouter
    .route('/')
    .get(getGithub)

module.exports = githubRouter;