const { Sequelize } = require('sequelize');

// Connection string formatı:
// mysql://<username>:<password>@<host>:<port>/<database>

const connectionString = "mysql://uxsxzhxktuh2cnxw:SacWe8anl4K4ZMWyJH7f@buuuhr4keatqnmdrd6ia-mysql.services.clever-cloud.com:3306/buuuhr4keatqnmdrd6ia";

const sequelize = new Sequelize(connectionString);

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
