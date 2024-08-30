const { DataTypes } = require('@sequelize/core');
const sequelize = require('../utils/database');

const FriendStatus = sequelize.define('FriendStatus', {
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
    tableName: 'FriendStatus',
    timestamps: false
});

module.exports = FriendStatus;
