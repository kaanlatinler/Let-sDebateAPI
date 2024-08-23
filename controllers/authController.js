const jwt = require('jsonwebtoken');
const User = require('../models/Users');

exports.Login = async (req, res, next) => {
  try {
    const { UserEmail, UserPassword } = req.body;

    const user = await User.findOne({ where: { UserEmail } });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (user.UserPassword !== UserPassword) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    const token = jwt.sign({ id: user.UserId }, process.env.SECRET_KEY, { expiresIn: '1h' });

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.Register = async (req, res, next) => {
  try {
    const { UserName, UserLastName, NickName, UserEmail, UserPassword, UserPoints, RoleId, DateOfBirth, ProfilePicture } = req.body;
    const user = await User.create({ UserName, UserLastName, NickName, UserEmail, UserPassword, UserPoints, RoleId, DateOfBirth, ProfilePicture });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};