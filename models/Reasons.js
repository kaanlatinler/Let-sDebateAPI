const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const Reasons = sequelize.define('Reasons', {
    ReasonId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    ReasonName: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true
    }
}, {
    tableName: 'Reasons',
    timestamps: false
});

module.exports = Reasons;
