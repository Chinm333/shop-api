const express = require('express');
const router = express.Router();
const billController = require('../controllers/billController');

router.post('/', billController.createBill);
router.get('/:billId?', billController.getBills);
router.put('/:billId', billController.updateBill);
router.delete('/:billId', billController.deleteBill);

module.exports = router;
