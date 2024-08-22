const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const RoomParticipants = sequelize.define('RoomParticipants', {
    ParticipantId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    RoomId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    UserId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    JoinDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'RoomParticipants',
    timestamps: false
});

module.exports = RoomParticipants;
