const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
    {
        //Phone number.Email.Name.Date of user registration.Date of birth (DOB).Monthly salary
        name:{
            type: String,
            required: true,
        },
        phone:{
            type: String,
            required: true,
        },
        email:{
            type: String,
            required: true,
            unique:true,
        },
        DOB:{
            type: Date,
            required: true,
        },
        registration_date:{
            type: Date,
            default: Date.now,
        },
        monthly_sal:{
            type: Number,
            required: true,
            min: 0,
        },
        purchase_power: {
            type: Number,
            default: 0,
        },
        password: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            enum: ['Pending', 'Approved', 'Rejected'],
            default: 'Pending',
        },
        borrowed_amount: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('UserSignup', UserSchema);