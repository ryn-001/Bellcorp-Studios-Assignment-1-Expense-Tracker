const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    amount:{
        type: Number,
        required: true,
    },
    category:{
        type: String,
        enum: ['Food', 'Transport', 'Entertainment', 'Healthcare', 'Utilities', 'Others'],
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    notes:{
        type: String,
        required: false
    }
}, {timestamps: true});

const Transaction = mongoose.model('transactions', transactionSchema);
module.exports = Transaction;