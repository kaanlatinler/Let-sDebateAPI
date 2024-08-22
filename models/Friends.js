const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const Friends = sequelize.define('Friends', {
    FriendsId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    UserId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    FriendId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    StatusID: {
        type: DataTypes.UUID,
        allowNull: false
    },
    CreatedDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'Friends',
    timestamps: false,
    indexes: [
        {
            unique: false,
            fields: ['UserId', 'FriendId']
        }
    ]
});

module.exports = Friends;
