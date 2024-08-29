const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticateToken = require('../middleware/authMiddleware');


router.get('/getAllUsers', authenticateToken, userController.getAllUsers);
router.get('/getUserById', authenticateToken, userController.getUserById);
router.post('/createUser', authenticateToken, userController.createUser);
router.put('/updateUser/:id', authenticateToken, userController.updateUser);
router.delete('/deleteUser/:id', authenticateToken, userController.deleteUser);

module.exports = router;