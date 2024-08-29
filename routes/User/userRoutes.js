const userController = require('../../controllers/User/userController');
const express = require('express');
const router = express.Router();
const authenticateToken = require('../../middleware/authMiddleware');

router.get('/profile', authenticateToken, userController.getProfile);

module.exports = router;