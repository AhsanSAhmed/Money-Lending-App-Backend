const User = require('../models/user.model.js');

const borrowMoney = async (req, res) => {
    try {
        const { amount, tenure } = req.body;

        if (!amount || !tenure) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        const user = await User.findById(req.userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const interestRate = 0.08;
        const monthlyRepayment = (amount * (1 + interestRate)) / tenure;
        user.purchase_power += amount;
        user.borrowed_amount += amount;

        await user.save();

        res.status(200).json({
            message: 'Borrowed money successfully',
            purchase_power: user.purchase_power,
            monthly_repayment: monthlyRepayment,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { borrowMoney };
