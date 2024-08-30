const { DataTypes } = require('@sequelize/core');
const sequelize = require('../utils/database');

const Reasons = sequelize.define('Reasons', {
    ReasonId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    ReasonName: {
        type: DataTypes.STRING(20),
        allowNull: false
    }
}, {
    tableName: 'Reasons',
    timestamps: false
});

module.exports = Reasons;
