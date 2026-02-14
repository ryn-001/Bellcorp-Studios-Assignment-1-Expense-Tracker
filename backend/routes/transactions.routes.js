const express = require('express');
const {TransactionControllers} = require('../controllers/index.controllers');
const TransactionRouter = express.Router();

TransactionRouter.post('/create', TransactionControllers.createTransaction);
TransactionRouter.get('/all', TransactionControllers.getTransactions);
TransactionRouter.put('/update', TransactionControllers.updateTransaction);
TransactionRouter.delete('/delete', TransactionControllers.deleteTransaction);

module.exports = TransactionRouter;