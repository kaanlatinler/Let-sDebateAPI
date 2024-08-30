const { DataTypes } = require('@sequelize/core');
const sequelize = require('../utils/database');

const Roles = sequelize.define('Roles', {
    RoleId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    RoleName: {
        type: DataTypes.STRING(20),
        allowNull: false
    }
}, {
    tableName: 'Roles',
    timestamps: false
});

module.exports = Roles;
