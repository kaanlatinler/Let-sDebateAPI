const RoomParticipants = require('../../models/RoomParticipants');

exports.getRoomParticipantsByRoomId = async (req, res, next) => {
    try {
        const { id } = req.params;
        const participants = await RoomParticipants.findAll({
            where: { RoomId: id }
        });
        res.status(200).json({participants, success: true});
    } catch (error) {
        res.status(500).json({ message: error.message, success: false });
    }
};

exports.getRoomParticipantsByRoomName = async (req, res, next) => {
    try {
        const { name } = req.params;
        const participants = await RoomParticipants.findAll({
            include: [
                {
                    model: require('../models/Rooms'),
                    where: { RoomName: name }
                }
            ]
        });
        res.status(200).json({participants, success: true});
    } catch (error) {
        res.status(500).json({ message: error.message, success: false });
    }
};