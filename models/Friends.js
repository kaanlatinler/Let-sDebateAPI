const { DataTypes } = require('@sequelize/core');
const sequelize = require('../utils/database');

const FriendStatus = require('./FriendStatus');
const Users = require('./Users');

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

Friends.belongsTo(FriendStatus, {
    foreignKey: 'StatusID'
});

Friends.belongsTo(Users, {
    foreignKey: 'UserId',
    as: 'User'
});

Friends.belongsTo(Users, {
    foreignKey: 'FriendId',
    as: 'Friend'
});

module.exports = Friends;
