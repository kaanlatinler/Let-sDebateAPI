const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const Reports = sequelize.define('Reports', {
    ReportId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    RoomId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    ReportedBy: {
        type: DataTypes.UUID,
        allowNull: false
    },
    ReportedUserID: {
        type: DataTypes.UUID,
        allowNull: false
    },
    ReasonID: {
        type: DataTypes.UUID,
        allowNull: false
    },
    ReportDetails: {
        type: DataTypes.TEXT
    },
    CreatedDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'Reports',
    timestamps: false
});

Reports.belongsTo(require('./Reasons'), {
    foreignKey: 'ReasonID'
});

Reports.belongsTo(require('./Rooms'), {
    foreignKey: 'RoomId'
});

Reports.belongsTo(require('./Users'), {
    foreignKey: 'ReportedBy',
    as: 'Reporter'
});

Reports.belongsTo(require('./Users'), {
    foreignKey: 'ReportedUserID',
    as: 'ReportedUser'
});

module.exports = Reports;
