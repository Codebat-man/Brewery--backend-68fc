const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  registeredOn: {
    type: Date,
    default: Date.now,
  },
  // Additional user properties can be added here
});

module.exports = mongoose.model('User', userSchema);
