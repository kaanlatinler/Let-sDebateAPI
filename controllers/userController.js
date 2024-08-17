const User = require('../models/User');

exports.createUser = async (req, res) => {
    const { username, id } = req.body;
    try {
      const newUser = await User.create({ username, id });
      res.status(201).json(newUser);
    } catch (err) {
      res.status(500).json({ message: 'Error creating user', error: err.message });
    }
  };

exports.getUsers = async (req, res) => {
    try {
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ message: 'Error getting users', error: err.message });
    }
  };