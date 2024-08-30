const RoomParticipants = require('../../models/RoomParticipants');

exports.getAllRoomParticipants = async (req, res, next) => {
    try {
        const participants = await RoomParticipants.findAll();
        res.status(200).json({participants, success: true});
    } catch (error) {
        res.status(500).json({ message: error.message, success: false });
    }
};

exports.getRoomParticipantById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const participant = await RoomParticipants.findByPk(id);
        if (!participant) {
            return res.status(404).json({ message: 'Participant not found', success: false });
        }
        res.status(200).json({ participant, success: true });
    } catch (error) {
        res.status(500).json({ message: error.message, success: false });
    }
};

exports.createRoomParticipant = async (req, res, next) => {
    try {
        const { RoomId, UserId } = req.body;
        const participant = await RoomParticipants.create({ RoomId, UserId });
        res.status(201).json({participant, success: true});
    } catch (error) {
        res.status(500).json({ message: error.message, success: false });
    }
};

exports.updateRoomParticipant = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { RoomId, UserId } = req.body;
        const participant = await RoomParticipants.findByPk(id);
        if (!participant) {
            return res.status(404).json({ message: 'Participant not found', success: false });
        }
        participant.RoomId = RoomId;
        participant.UserId = UserId;
        await participant.save();
        res.status(200).json({participant, success: true});
    } catch (error) {
        res.status(500).json({ message: error.message, success: false });
    }
};

exports.deleteRoomParticipant = async (req, res, next) => {
    try {
        const { id } = req.params;
        const participant = await RoomParticipants.findByPk(id);
        if (!participant) {
            return res.status(404).json({ message: 'Participant not found', success: false });
        }
        await participant.destroy();
        res.status(200).json({ success: true });
    } catch (error) {
        res.status(500).json({ message: error.message, success: false });
    }
};
