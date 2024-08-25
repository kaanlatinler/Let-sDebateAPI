const sequelize = require('../utils/database');
const Users = require('../models/Users');

exports.getAllUsers = async (req, res, next) => {
    try {
        const users = await Users.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getUserById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await Users.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({user: user});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createUser = async (req, res, next) => {
    try {
        const { UserName, UserLastName, NickName, UserEmail, UserPassword, UserPoints, RoleId, DateOfBirth, ProfilePicture } = req.body;
        const user = await Users.create({ UserName, UserLastName, NickName, UserEmail, UserPassword, UserPoints, RoleId, DateOfBirth, ProfilePicture });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { UserName, UserLastName, NickName, UserEmail, UserPassword, UserPoints, RoleId, DateOfBirth, ProfilePicture } = req.body;
        const user = await Users.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        user.UserName = UserName;
        user.UserLastName = UserLastName;
        user.NickName = NickName;
        user.UserEmail = UserEmail;
        user.UserPassword = UserPassword;
        user.UserPoints = UserPoints;
        user.RoleId = RoleId;
        user.DateOfBirth = DateOfBirth;
        user.ProfilePicture = ProfilePicture;
        await user.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await Users.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        await user.destroy();
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};