const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const Roles = require('./Roles');

const Users = sequelize.define('Users', {
    UserId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    UserName: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    UserLastName: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    NickName: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    UserEmail: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    UserPassword: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    UserPoints: {
        type: DataTypes.INTEGER,
        defaultValue: null
    },
    CreatedDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    RoleId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    DateOfBirth: {
        type: DataTypes.DATETIME,
        defaultValue: null
    },
    ProfilePicture: {
        type: DataTypes.TEXT,
        defaultValue: null
    }
}, {
    tableName: 'Users',
    timestamps: false
});

Users.belongsTo(Roles, { 
    foreignKey: 'RoleId' 
});

module.exports = Users;
