const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const Users = require('./Users');
const TransactionTypes = require('./TransactionTypes');

const Transactions = sequelize.define('Transactions', {
    TransactionId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    UserId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    Amount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    TransactionTypeId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    TransactionDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'Transactions',
    timestamps: false
});

Transactions.belongsTo(Users, {
    foreignKey: 'UserId'
});

Transactions.belongsTo(TransactionTypes, {
    foreignKey: 'TransactionTypeId'
});

module.exports = Transactions;
