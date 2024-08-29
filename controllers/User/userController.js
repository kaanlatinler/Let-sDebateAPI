const Users = require('../../models/Users');
const Roles = require('../../models/Roles');
const Friends = require('../../models/Friends');
const FriendStatus = require('../../models/FriendStatus');
const Transactions = require('../../models/Transactions');
const TransactionType = require('../../models/TransactionTypes');

exports.getProfile = async (req, res, next) => {
    try {
        const userFromToken = req.user;
        if (!userFromToken) {
            return res.status(404).json({ message: 'User not found', success: false });
        }

        const user = await Users.findByPk(userFromToken.UserId, {
            attributes: {
                exclude: ['CurrentToken', 'RoleId', 'UserId']
            },
            include: [
                {
                    model: Roles,
                    attributes: ['RoleName']
                }
            ],
            }
        );

        const friends = await Friends.findAll({
            where: { UserId: userFromToken.UserId },
            include: [
                {
                    model: Users,
                    as: 'Friend',
                    attributes: ['UserName', 'UserLastName', 'NickName', 'ProfilePicture', 'UserId']
                },
                {
                    model: FriendStatus,
                    attributes: ['StatusName']
                }
            ]
        });

        const transactions = await Transactions.findAll({
            where: { UserId: userFromToken.UserId },
            include: [
                {
                    model: TransactionType,
                    attributes: ['TypeName']
                }
            ]
        });

        const profile = {
            user,
            friends,
            transactions
        };

        res.status(200).json({profile, success: true});
    } catch (error) {
        res.status(500).json({ message: error.message, success: false });
    }
};