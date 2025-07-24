const express = require('express');
const env = require('dotenv').config();

const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use((req, res, next) => {
    console.log("This is the required req:");
    next();
});

const Port = 3000;
app.listen(Port, () => {
    console.log(`The server is running on port: ${Port}`);
});