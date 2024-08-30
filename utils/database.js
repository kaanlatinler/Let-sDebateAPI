const { Sequelize } = require('sequelize');

const config = require('../config/config').development;

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mssql',
    dialectOptions: {
      options: {
        encrypt: true,
        trustServerCertificate: true,
      }
    },
    logging: false,
  });

  (async () => {
    try {
      await sequelize.authenticate();
      console.log('MSSQL bağlantısı başarıyla sağlandı.');
    } catch (error) {
      console.error('Bağlantı sağlanamadı:', error);
    }
  })();

module.exports = sequelize;