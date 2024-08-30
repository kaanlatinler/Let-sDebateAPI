const express = require('express');
const router = express.Router();
const roomController = require('../../controllers/crud/roomController');
const authenticateToken = require('../../middleware/authMiddleware');

router.get('/getAllRooms', authenticateToken, roomController.getAllRooms);
router.get('/getRoomById/:id', authenticateToken, roomController.getRoomById);
router.post('/createRoom', authenticateToken, roomController.createRoom);
router.put('/updateRoom/:id', authenticateToken, roomController.updateRoom);
router.delete('/deleteRoom/:id', authenticateToken, roomController.deleteRoom);

module.exports = router;