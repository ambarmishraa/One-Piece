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

const listingSchema = new mongoose.Schema(
    {
        animeName: {
            type: String,
            required: [true, "Please enter the anime name."]
        },
        authorName: {
            type: String,
            required: [true, "Please enter the author name."]
        },
        genre: {
            type: String,
            required: [true, "Please enter the anime genre."]
        },
        rating: {
            type: String,
            required: [true, "Please enter the anime rating."]
        },
        price: {
            type: String,
            required: [true, "Please enter the anime price."]
        },
        description: {
            type: String,
            required: [true, "Please enter the anime description."]
        }
    },
    {
        timestamps: true,
    }
)

const AnimeListing = mongoose.model("Anime", listingSchema)

module.exports = Admin;
module.exports = AnimeListing;