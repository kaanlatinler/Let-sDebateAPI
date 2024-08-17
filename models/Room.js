const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Room = sequelize.define('Rooms', {
    roomName : {
        type: DataTypes.STRING,
        allowNull: false,
    },
    roomId : {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    roomStatus : {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Room;