const userController = require('../../controllers/User/userController');
const express = require('express');
const router = express.Router();
const authenticateToken = require('../../middleware/authMiddleware');

router.get('/profile', authenticateToken, userController.getProfile);
router.get('/getUsersJoinedRooms', authenticateToken, userController.getUsersJoinedRooms);

module.exports = router;