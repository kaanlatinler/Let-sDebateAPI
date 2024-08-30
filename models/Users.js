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
        allowNull: false,
        unique: true // Email'in unique olmasını sağlar
    },
    UserPassword: {
        type: DataTypes.STRING(60), // Parola için daha uzun bir alan kullanılması önerilir
        allowNull: false
    },
    UserPoints: {
        type: DataTypes.INTEGER,
        defaultValue: 0 // null yerine 0 daha mantıklı olabilir
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
        type: DataTypes.DATE
    },
    ProfilePicture: {
        type: DataTypes.TEXT
    }
}, {
    tableName: 'Users',
    timestamps: false
});

Users.belongsTo(Roles, { 
    foreignKey: 'RoleId' 
});

module.exports = Users;
