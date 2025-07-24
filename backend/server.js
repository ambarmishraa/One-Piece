const express = require('express');
const env = require('dotenv').config();
const User = require('./model/userModel.js');
const Admin = require('./model/adminModel.js');

const app = express();
app.use(express.json());
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.get('/', (req, res, next) => {
  console.log("User and Admin Selection Page");
  res.send("This is Selection Screen");
})

// User Section
app.get('/user', (req, res, next) => {
  console.log("Welcome User.....");
  res.send("Welcome User ....!")
});

app.post('/register-user', async (req, res, next) => {
  console.log("Post is working...");
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  }
  catch (error) {
    res.status(500).json({ message: error.message })
  }
});

// Admin Section
app.get('/admin', (req, res, next) => {
  console.log("Welcome Admin.....");
  res.send("Welcome Admin ....!")
})

app.post('/register-admin', async (req, res, next) => {
  console.log("Post is working...");
  try{
    const admin = await Admin.create(req.body);
    res.status(200).json(admin)
  }
  catch (error) {
    res.status(500).json({message: error.message})
  }
})

const Port = 3000;
app.listen(Port, () => {
  console.log(`The server is running on port: ${Port}`);
});