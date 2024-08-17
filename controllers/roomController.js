const Room = require('../models/Room');

exports.createRoom = async (req, res) => {
    const { roomName, roomId, roomStatus } = req.body;

    try {
        const newRoom = await Room.create({ roomName, roomId, roomStatus });
        res.status(201).json(newRoom);
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error: err.message });
    }
};

exports.getRooms = async (req, res) => {
    try {
        const rooms = await Room.findAll();
        res.status(200).json(rooms);
    } catch (error) {
        res.status(500).json({ message: 'Error getting users', error: err.message });
    }
};