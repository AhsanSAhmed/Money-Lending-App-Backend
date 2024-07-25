const express = require('express');
const { getUsers, getUserById } = require('../controllers/userController.js');
const authenticateJWT = require('../middleware/authenticateJWT.js');

const router = express.Router();

router.get('/users', authenticateJWT, getUsers);
router.get('/user/:id', authenticateJWT, getUserById);

module.exports = router;
