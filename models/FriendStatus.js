const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const FriendStatus = sequelize.define('FriendStatus', {
    StatusId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    StatusName: {
        type: DataTypes.STRING(10),
        allowNull: false,
        unique: true
    }
}, {
    tableName: 'FriendStatus',
    timestamps: false
});

module.exports = FriendStatus;
