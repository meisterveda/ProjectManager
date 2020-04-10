const express = require('express');
const usersRouter = express.Router();
const { getUsers, addUser, deleteUser } = require('../../../controllers/internal/usersController');

usersRouter
    .route('/')
    .get(getUsers)
    .post(addUser);

usersRouter
    .route('/:id')
    .delete(deleteUser);

module.exports = usersRouter;