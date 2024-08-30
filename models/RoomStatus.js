const { DataTypes } = require('@sequelize/core');
const sequelize = require('../utils/database');

const RoomStatus = sequelize.define('RoomStatus', {
    StatusId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    StatusName: {
        type: DataTypes.STRING(10),
        allowNull: false
    }
}, {
    tableName: 'RoomStatus',
    timestamps: false
});

module.exports = RoomStatus;
