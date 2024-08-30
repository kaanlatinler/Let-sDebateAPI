const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');
const Rooms = require('./Rooms');
const Users = require('./Users');

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

RoomParticipants.belongsTo(Rooms, {
    foreignKey: 'RoomId'
});

RoomParticipants.belongsTo(Users, {
    foreignKey: 'UserId'
});

module.exports = RoomParticipants;
