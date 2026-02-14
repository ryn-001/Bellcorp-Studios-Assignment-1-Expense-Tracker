const {Transaction} = require('../models/models.index');

const getTransactions = async (email) => {
    return await Transaction.find({email});
}

const createTransaction = async (transaction) => {
    return await Transaction.create(transaction);
}

const updateTransaction = async (id, field,value) => {
    return await Transaction.findByIdAndUpdate(id, { $set: {[field] : value}}, {new: true});
}

const deleteTransaction = async (id) => {
    return await Transaction.findByIdAndDelete(id);
}

module.exports = {createTransaction, updateTransaction, deleteTransaction, getTransactions};