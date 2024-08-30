const { DataTypes } = require('@sequelize/core');
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

RoomParticipants.belongsTo(require('./Rooms'), {
    foreignKey: 'RoomId'
});

RoomParticipants.belongsTo(require('./Users'), {
    foreignKey: 'UserId'
});

module.exports = RoomParticipants;
