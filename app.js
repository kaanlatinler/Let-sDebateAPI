const express = require('express');
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const roomRoutes = require('./routes/roomRoutes');
require('dotenv').config();

const app = express();
app.use((req, res, next) => {
    console.log(`${req.method} request to ${req.originalUrl}`);
    next();
  });

app.use(express.json());

app.use('/api', userRoutes);
app.use('/api', roomRoutes);

sequelize.sync().then(() => {
  app.listen(5000, () => {
    console.log(`Server is running on port ${5000}`);
  });
});