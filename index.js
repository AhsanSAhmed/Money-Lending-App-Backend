const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const borrowRoutes = require('./routes/borrowRoutes');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/', authRoutes);
app.use('/', userRoutes);
app.use('/', borrowRoutes);

mongoose.connect('mongodb+srv://Ahsan:slyrOOvAVuwZFbcu@backenddb.ms9wd65.mongodb.net/MoneyAPP_API?retryWrites=true&w=majority&appName=BackendDB')
    .then(() => {
        console.log('Connected to database!');
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(() => {
        console.log("Connection failed!");
    });
