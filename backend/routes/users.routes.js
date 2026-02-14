const express = require('express');
const {UserControllers} = require('../controllers/index.controllers');
const UserRouter = express.Router();

UserRouter.get('/me', UserControllers.getMe);
UserRouter.post('/create', UserControllers.createUser);

module.exports = UserRouter;