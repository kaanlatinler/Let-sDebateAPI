const express = require('express');
const router = express.Router();
const roomController = require('../../controllers/Room/roomController');
const roomParticipantsController = require('../../controllers/Room/roomParticipantController');
const authenticateToken = require('../../middleware/authMiddleware');

router.get('/getRoomsByTopicId', authenticateToken, roomController.getRoomsByTopicId);
router.get('/getRoomParticipantsByRoomId', authenticateToken, roomParticipantsController.getRoomParticipantsByRoomId);
router.get('/getRoomParticipantsByRoomName', authenticateToken, roomParticipantsController.getRoomParticipantsByRoomName);

module.exports = router;