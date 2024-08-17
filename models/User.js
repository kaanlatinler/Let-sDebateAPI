const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
    username : {
        type: DataTypes.INTEGER,
        allowNull: true
    },

    id : {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    }
});

module.exports = User;