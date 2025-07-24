const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            unique: true,
            required: [true, "Please enter your email."]
        },
        password: {
            type: String,
            required: [true, "Please enter your password."]
        }
    },
    {
        timestamps: true,
    }
)

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;