const express = require("express");
const UserRouter = require("./users.routes");
const TransactionRouter = require("./transactions.routes");

const Router = express.Router();

Router.use('/users', UserRouter);
Router.use('/transactions', TransactionRouter);

module.exports = Router;