const { Sequelize } = require('@sequelize/core');
const { MsSqlDialect } = require('@sequelize/mssql');

const config = require('../config/config').development;

const sequelize = new Sequelize({
    dialect: MsSqlDialect,
    server: config.host,
    port: 1433,
    database: config.database,
    authentication: {
        type: 'default',
        options: {
            userName: config.username,
            password: config.password,
        },
    },
    encrypt: true,
    trustServerCertificate: true,
    enableArithAbort: true
});

module.exports = sequelize;