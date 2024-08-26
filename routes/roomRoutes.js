const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController');

router.get('/getAllRooms', roomController.getAllRooms);
router.get('/getRoomById/:id', roomController.getRoomById);
router.get('/getRoomsByTopicId/:id', roomController.getRoomsByTopicId);
router.post('/createRoom', roomController.createRoom);
router.put('/updateRoom/:id', roomController.updateRoom);
router.delete('/deleteRoom/:id', roomController.deleteRoom);

module.exports = router;