const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const TransactionTypes = sequelize.define('TransactionTypes', {
    TypeId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    TypeName: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true // Transaction type'ların benzersiz olması mantıklı olabilir
    }
}, {
    tableName: 'TransactionTypes',
    timestamps: false
});

module.exports = TransactionTypes;
