const { Sequelize } = require('sequelize');
const config = require('../config/config').development;

const sequelize = new Sequelize(config.conStr);

module.exports = sequelize;