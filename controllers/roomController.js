const Rooms = require('../models/Rooms');

exports.getAllRooms = async (req, res, next) => {
    try {
        const rooms = await Rooms.findAll();
        res.status(200).json(rooms);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getRoomById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const room = await Rooms.findByPk(id, {
            include: [
                {
                    model: require('../models/RoomStatus'),
                    attributes: ['StatusName']
                },
                {
                    model: require('../models/Topics'),
                    attributes: ['TopicTitle', 'TopicDesc']
                }
            ]
        });
        if (!room) {
            return res.status(404).json({ message: 'Room not found' });
        }
        res.status(200).json(room);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createRoom = async (req, res, next) => {
    try {
        const { TopicId, StatusId, DurationLimit, TotalDuration } = req.body;
        const room = await Rooms.create({ TopicId, StatusId, DurationLimit, TotalDuration });
        res.status(201).json(room);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateRoom = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { TopicId, StatusId, DurationLimit, TotalDuration } = req.body;
        const room = await Rooms.findByPk(id);
        if (!room) {
            return res.status(404).json({ message: 'Room not found' });
        }
        room.TopicId = TopicId;
        room.StatusId = StatusId;
        room.DurationLimit = DurationLimit;
        room.TotalDuration = TotalDuration;
        await room.save();
        res.status(200).json(room);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteRoom = async (req, res, next) => {
    try {
        const { id } = req.params;
        const room = await Rooms.findByPk(id);
        if (!room) {
            return res.status(404).json({ message: 'Room not found' });
        }
        await room.destroy();
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getRoomsByTopicId = async (req, res, next) => {
    try {
      const { id } = req.params;
      const rooms = await Rooms.findAll({
        where: { TopicId: id },
        include: [
          {
            model: require('../models/RoomStatus'),
            attributes: ['StatusName']
          },
          {
            model: require('../models/Topics'),
            attributes: ['TopicTitle', 'TopicDesc']
          }
        ]
      });
  
      res.status(200).json(rooms);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  