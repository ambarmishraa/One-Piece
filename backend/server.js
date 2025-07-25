const express = require('express');
const env = require('dotenv').config();
const User = require('./model/userModel.js');
const Admin = require('./model/adminModel.js');
const AnimeListing = require('./model/adminModel.js')

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

// User Section Start Here
app.get('/user', (req, res, next) => {
  console.log("Welcome User.....");
  res.send("Welcome User ....!")
});

// For creating a user with email and password
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

// For getting all the anime from DB
app.get('/anime-listing', async (req, res, next) => {
  try {
    const animes = await AnimeListing.find({});
    res.status(200).json(animes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// For getting one anime form DB by id.
app.get('/anime-listing/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const anime = await AnimeListing.findById(id);
    res.status(200).json(anime);
  }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
})

// For Updating the data in DB by Id
app.put('/anime-listing/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateAnime = await AnimeListing.findByIdAndUpdate(id, req.body);
    res.status(200).json(updateAnime);
  }
  catch (error) {
    res.status(500).json({ message: error.message })
  }
});

// For Deleting the data from DB by Id
app.delete('/anime-listing/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedAnime = await AnimeListing.findByIdAndDelete(id);
    res.status(200).json(deletedAnime);
  }
  catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Admin Section Start Here
app.get('/admin', (req, res, next) => {
  console.log("Welcome Admin.....");
  res.send("Welcome Admin ....!")
})

// For creating a user with email and password
app.post('/register-admin', async (req, res, next) => {
  console.log("Post is working...");
  try {
    const admin = await Admin.create(req.body);
    res.status(200).json(admin)
  }
  catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// For listing the anime in DB
app.post('/anime-listing', async (req, res, next) => {
  try {
    const animeListing = await AnimeListing.create(req.body);
    res.status(200).json(animeListing);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

const Port = 3000;
app.listen(Port, () => {
  console.log(`The server is running on port: ${Port}`);
});