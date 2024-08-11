const Item = require('../models/item');
const CommonService = require('../services/commonService');

exports.addItem = async (req, res) => {
    const { name, quantity, price } = req.body;
    const itemId = CommonService.generateId();
    const body = { itemId, name, quantity, price };
    try {
        const newItem = await Item.create(body);
        ;

        res.status(201).json(newItem);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateItem = async (req, res) => {
    const { itemId } = req.params;
    const updateData = req.body;

    try {
        const updatedItem = await Item.findOneAndUpdate({ itemId }, updateData, { new: true });
        if (!updatedItem) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteItem = async (req, res) => {
    const { itemId } = req.params;

    try {
        const deletedItem = await Item.findOneAndDelete({ itemId });
        if (!deletedItem) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
