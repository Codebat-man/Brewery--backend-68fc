const User = require('../models/user');
const jwt = require('jsonwebtoken');
const connectDB = require('../db/connect'); // Import the database connection function

const secretKey = "@!BaRkEsWhEiRtYa!@88";

connectDB();
async function register(req, res) {
  const { name, email, password } = req.body;

  try {
    // Check if the email is already registered
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ error: 'Email is already registered' });
    }

    // Create a new user
    const newUser = new User({
      name,
      email,
      password, // Remember to hash the password before saving it in production
    });

    await newUser.save();

    // Generate a JWT token for the registered user
    const token = jwt.sign({ email: newUser.email, name: newUser.name }, secretKey);

    res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json({ error: 'Server error' });
  }
}


async function login(req, res) {
  const { email, password } = req.body;

  try {
    // Authenticate the user
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'Authentication failed. User not found.' });
    }

    // Check the user's password (in production, use a password hashing library like bcrypt)
    if (user.password !== password) {
      return res.status(401).json({ error: 'Authentication failed. Wrong password.' });
    }

    // Generate a JWT token for the authenticated user
    const token = jwt.sign({ email: user.email, name: user.name }, secretKey);

    res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json({ error: 'Server error' });
  }
}

function protectedRoute(req, res) {
  // This protected route will only be accessible if a valid JWT token is provided in the request headers.
  res.status(200).json({ message: 'You have access to the protected route!' });
}

module.exports = { register, login, protectedRoute };
