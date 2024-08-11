const mongoose = require('mongoose');

const billSchema = new mongoose.Schema({
    billId: {
        type: String,
        unique: true,
        required: true
    },
    items: [
        {
            itemId: {
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            },
        }
    ],
    totalAmount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Bill', billSchema);
