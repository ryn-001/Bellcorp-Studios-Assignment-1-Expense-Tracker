const {TransactionServices} = require('../services/services.index');

const getTransactions = async (req,res) => {
    try{
        const {email} = req.body;
        
        if(!email) return res.status(400).json({success: false, message: 'Missing required fields'});

        const transactions = await TransactionServices.getTransactions(email);

        return res.status(200).json({success: true, message: 'Transactions fetched successfully', transactions});

    }catch(err){
        return res.status(500).json({success: false, message: 'An error occurred', error: error});
    }
}

const createTransaction = async (req,res) => {
    try{

        const {email, title, amount, category, date, notes} = req.body;

        if(!email || !title || !amount || !category || !date){
            return res.status(400).json({success: false, message: 'Missing required fields'});
        }

        const transaction = await TransactionServices.createTransaction({email, title, amount, category, date, notes});

        return res.status(201).json({success: true, message: 'Transaction created successfully', transaction});
    }catch(err){
        return res.status(500).json({success: false, message: 'An error occurred', error: error});
    }
}

const updateTransaction = async (req,res) => {
    try{
        const {id, field, value} = req.body;

        if(!id || !field || !value){
            return res.status(400).json({success: false, message: 'Missing required fields'});
        }

        const transaction = await TransactionServices.updateTransaction(id, field, value);

        if(!transaction){
            return res.status(404).json({success: false, message: 'Transaction not found'});
        }

        return res.status(200).json({success: true, message: 'Transaction updated successfully', transaction});
    }catch(err){
        return res.status(500).json({success: false, message: 'An error occurred', error: error});
    }
}

const deleteTransaction = async (req,res) => {
    try{
        const {id} = req.body;

        if(!id){
            return res.status(400).json({success: false, message: 'Missing required fields'});
        }

        const transaction = await TransactionServices.deleteTransaction(id);

        if(!transaction){
            return res.status(404).json({success: false, message: 'Transaction not found'});
        }

        return res.status(200).json({success: true, message: 'Transaction deleted successfully', transaction});
    }catch(err){
        return res.status(500).json({success: false, message: 'An error occurred', error: error});
    }
}

module.exports = {createTransaction, updateTransaction, deleteTransaction, getTransactions};