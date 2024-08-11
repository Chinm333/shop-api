const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

router.post('/', itemController.addItem);
router.get('/', itemController.getItems);
router.put('/:itemId', itemController.updateItem); 
router.delete('/:itemId', itemController.deleteItem); 

module.exports = router;
