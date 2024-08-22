const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const RoomMessages = sequelize.define('RoomMessages', {
    MessageId: {
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
    MessageContent: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    CreatedDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'RoomMessages',
    timestamps: false
});

module.exports = RoomMessages;
