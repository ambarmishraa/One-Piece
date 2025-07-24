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

// 🔐 Hash password before saving
adminSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next(); // only hash if changed
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;