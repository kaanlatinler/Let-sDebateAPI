const express = require('express');
const sequelize = require('./utils/database');

const authRoutes = require('./routes/auth/authRoutes');
const userRoutes = require('./routes/crud/userRoutes');
const topicRoutes = require('./routes/crud/topicRoutes');
const roomRoutes = require('./routes/crud/roomRoutes');

const customUserRoutes = require('./routes/User/userRoutes');


require('dotenv').config();
const cors = require('cors');

const app = express();

app.use((req, res, next) => {
    console.log(`${req.method} request to ${req.originalUrl}`);
    next();
  });


app.use(cors(
    {
        origin: 'http://orionn.xyz',
        credentials: true
    }
));
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/topics', topicRoutes);
app.use('/api/rooms', roomRoutes);

app.use('/api/users', customUserRoutes);

const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});