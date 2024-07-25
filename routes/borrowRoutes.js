const express = require('express');
const { borrowMoney } = require('../controllers/borrowController.js');
const authenticateJWT = require('../middleware/authenticateJWT.js');

const router = express.Router();

router.post('/borrow', authenticateJWT, borrowMoney);

module.exports = router;
