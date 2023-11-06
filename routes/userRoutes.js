// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const jwt = require('jsonwebtoken');

// User registration
router.post('/register', userController.register);

// User login
router.post('/login', userController.login);

// Protected route (requires authentication)
router.get('/protected', verifyToken, userController.protectedRoute);

function verifyToken(req, res, next) {
  const token = req.headers['authorization'];

  if (typeof token !== 'undefined') {
    jwt.verify(token, 'your-secret-key', (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        next();
      }
    });
  } else {
    res.sendStatus(401);
  }
}

module.exports = router;
