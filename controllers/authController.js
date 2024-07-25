const jwt = require('jsonwebtoken');
const User = require('../models/user.model.js');

const JWT_SECRET = 'homunculi_in_fmab_make_me_sad';

const signup = async (req, res) => {
    try {
        const { name, phone, email, DOB, monthly_sal, password } = req.body;

        if (!name || !phone || !email || !DOB || monthly_sal == null || !password) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        const dob = new Date(DOB);
        const age = new Date().getFullYear() - dob.getFullYear();
        if (new Date().getMonth() < dob.getMonth() ||
            (new Date().getMonth() === dob.getMonth() && new Date().getDate() < dob.getDate())) {
            age--;
        }

        if (age <= 20) {
            return res.status(400).json({ message: 'User must be above 20 Years Old' });
        }

        if (monthly_sal < 25000) {
            return res.status(400).json({ message: 'Monthly Salary should be greater than ₹25000' });
        }

        const user = new User({ name, phone, email, DOB, monthly_sal, password, status: "Approved" });
        await user.save();
        res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        const user = await User.findOne({ email });
        if (!user || user.password !== password) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { signup, login };
