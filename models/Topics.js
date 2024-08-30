const { DataTypes } = require('@sequelize/core');
const sequelize = require('../utils/database');

const Topics = sequelize.define('Topics', {
    TopicId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    TopicTitle: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    TopicDesc: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    CreatedDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'Topics',
    timestamps: false
});

module.exports = Topics;