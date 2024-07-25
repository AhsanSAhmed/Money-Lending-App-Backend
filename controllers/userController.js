const User = require('../models/user.model.js');

const getUsers = async (req, res) => {
    try {
        const users = await User.find({}, 'name purchase_power phone email registration_date DOB monthly_sal');
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id, 'name purchase_power phone email registration_date DOB monthly_sal');
        
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getUsers, getUserById };
