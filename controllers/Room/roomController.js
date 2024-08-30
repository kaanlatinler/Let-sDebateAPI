const Rooms = require('../../models/Rooms');

exports.getRoomsByTopicId = async (req, res, next) => {
    try {
        const rooms = await Rooms.findAll({
            include: [
            {
                model: require('../../models/RoomStatus'),
                attributes: ['StatusName']
            },
            {
                model: require('../../models/Topics'),
                attributes: ['TopicTitle', 'TopicDesc']
            }
            ]
        });
  
        res.status(200).json({rooms, success: true});
    } catch (error) {
      res.status(500).json({ message: error.message, success: false });
    }
};