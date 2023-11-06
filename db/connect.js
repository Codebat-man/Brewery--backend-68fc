const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://agoyal7718:abhaygoyal@cluster5.ueeuvaa.mongodb.net/brewery?retryWrites=true&w=majority', {
    
    });
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
};

module.exports = connectDB;
 // mongodb+srv://agoyal7718:abhaygoyal@cluster5.ueeuvaa.mongodb.net/brewery?retryWrites=true&w=majority
