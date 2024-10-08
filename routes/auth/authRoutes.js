const express = require('express');
const router = express.Router();
const authController = require('../../controllers/auth/authController');

router.post('/login', authController.Login);
router.post('/register', authController.Register);

module.exports = router;