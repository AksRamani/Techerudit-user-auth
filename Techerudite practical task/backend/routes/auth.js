const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../Models/User');

const router = express.Router();

// Sign Up
router.post('/signup', async (req, res) => {
    const { username, email, password, role } = req.body;
    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(200).json({ data : {status : 1, message: 'User already exists' }});

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({ username, email, role, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ data :{status : 1, message: 'User created successfully' }});
    } catch (error) {
        console.error(error); // Log the actual error to help with debugging
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Sign In
router.post('/signin', async (req, res) => {
    const { email, password, } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(200).json({  status : 0, message: 'User not found' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(200).json({  status : 0, message: 'password is wrong' });


        if (user && Number(user.role) == 0) return res.status(200).json({  status : 0, message: 'permission not allow' });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token : token, status : 1, data: user });
    } catch (error) {
        res.status(500).json({status : 0, error: 'Internal server error', error });
    }
});

module.exports = router;
