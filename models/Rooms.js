const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const Rooms = sequelize.define('Rooms', {
    RoomId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    TopicId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    StatusId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    DurationLimit: {
        type: DataTypes.INTEGER,
        defaultValue: null
    },
    TotalDuration: {
        type: DataTypes.INTEGER,
        defaultValue: null
    },
    CreatedDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'Rooms',
    timestamps: false
});

module.exports = Rooms;
