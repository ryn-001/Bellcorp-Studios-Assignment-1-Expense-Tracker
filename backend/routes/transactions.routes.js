const express = require('express');
const {TransactionController} = require('../controllers/index.controllers');
const TransactionRouter = express.Router();

TransactionRouter.post('/create', TransactionController.createTransaction);
TransactionRouter.get('/all', TransactionController.getTransactions);
TransactionRouter.put('/update', TransactionController.updateTransaction);
TransactionRouter.delete('/delete', TransactionController.deleteTransaction);

module.exports = TransactionRouter;