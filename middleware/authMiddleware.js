const jwt = require('jsonwebtoken');
const User = require('../models/Users');

const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access denied' });
  }

  try {
    jwt.verify(token, process.env.SECRET_KEY, async (err, user) => {
      if (err) {
        return res.status(403).json({ message: 'Invalid token' });
      }

      const userFromToken = await User.findByPk(user.user_id);
      if (!userFromToken) {
        return res.status(404).json({ message: 'User not found' });
      }

      req.user = userFromToken;
      next();
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = authenticateToken;