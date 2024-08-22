const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/getAllUsers', userController.getAllUsers);
router.get('/getUserById', userController.getUserById);
router.post('/createUser', userController.createUser);
router.put('/updateUser', userController.updateUser);
router.delete('/deleteUser', userController.deleteUser);

module.exports = router;