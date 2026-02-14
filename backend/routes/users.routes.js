const express = require('express');
const {UserControllers} = require('../controllers/index.controllers');
const UserRouter = express.Router();

UserRouter.get('/me', UserControllers.getUser);
UserRouter.post('/register', UserControllers.register);

module.exports = UserRouter;