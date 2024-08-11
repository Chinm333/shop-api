const Bill = require('../models/bill');
const Item = require('../models/item');
const CommonService = require('../services/commonService');

exports.createBill = async (req, res) => {
    const { items } = req.body;
    let totalAmount = 0;

    try {
        for (const item of items) {
            const inventoryItem = await Item.findOne({ itemId: item.itemId });
            if (inventoryItem && inventoryItem.quantity >= item.quantity) {
                inventoryItem.quantity -= item.quantity;
                totalAmount += inventoryItem.price * item.quantity;
                await Item.findOneAndUpdate({ itemId: item.itemId }, { quantity: inventoryItem.quantity });
            } else {
                return res.status(400).json({ error: 'Insufficient quantity or item not found' });
            }
        }

        const billId = CommonService.generateId();
        const body = { billId, items, totalAmount };

        const newBill = await Bill.create(body);
        res.status(201).json(newBill);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getBills = async (req, res) => {
    const { billId } = req.params;

    try {
        if (billId) {
            const bill = await Bill.findOne({ billId });
            if (!bill) {
                return res.status(404).json({ error: 'Bill not found' });
            }
            return res.status(200).json(bill);
        } else {
            const bills = await Bill.find();
            return res.status(200).json(bills);
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateBill = async (req, res) => {
    const { billId } = req.params;
    const updateData = req.body;

    try {
        const updatedBill = await Bill.findOneAndUpdate({ billId }, updateData, { new: true });
        if (!updatedBill) {
            return res.status(404).json({ error: 'Bill not found' });
        }
        res.status(200).json(updatedBill);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteBill = async (req, res) => {
    const { billId } = req.params;

    try {
        const deletedBill = await Bill.findOneAndDelete({ billId });
        if (!deletedBill) {
            return res.status(404).json({ error: 'Bill not found' });
        }
        res.status(200).json({ message: 'Bill deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
