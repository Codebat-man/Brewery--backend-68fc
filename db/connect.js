const mongoose = require('mongoose');
const DB = 'mongodb+srv://agoyal7718:abhaygoyal@cluster5.ueeuvaa.mongodb.net/brewery?retryWrites=true&w=majority';
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://test:Qd7lc4xhRhQTa9CW@cluster0.jo8w72a.mongodb.net/brew?retryWrites=true&w=majority', {
    
    });
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
};

module.exports = connectDB;
