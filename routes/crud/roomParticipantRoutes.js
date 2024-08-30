const express = require('express');
const router = express.Router();
const roomParticipantController = require('../../controllers/crud/roomParticipantController');
const authenticateToken = require('../../middleware/authMiddleware');

router.get('/getAllRoomParticipants', authenticateToken, roomParticipantController.getAllRoomParticipants);
router.get('/getRoomParticipantById/:id', authenticateToken, roomParticipantController.getRoomParticipantById);
router.post('/createRoomParticipant', authenticateToken, roomParticipantController.createRoomParticipant);
router.put('/updateRoomParticipant/:id', authenticateToken, roomParticipantController.updateRoomParticipant);
router.delete('/deleteRoomParticipant/:id', authenticateToken, roomParticipantController.deleteRoomParticipant);

module.exports = router;