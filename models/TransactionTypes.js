const { DataTypes } = require('@sequelize/core');
const sequelize = require('../utils/database');

const TransactionTypes = sequelize.define('TransactionTypes', {
    TypeId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    TypeName: {
        type: DataTypes.STRING(20),
        allowNull: false
    }
}, {
    tableName: 'TransactionTypes',
    timestamps: false
});

module.exports = TransactionTypes;
