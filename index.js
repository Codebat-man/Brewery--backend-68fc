const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
const userRoutes =require("./routes/userRoutes")
const reviewRoutes =require("./routes/reviewRoutes")


  app.use(express.json());
  app.use(cors());
  app.use(bodyParser.json());
  

  app.use('/api/user', userRoutes);
  app.use('/api/review', reviewRoutes);

// Middleware to log incoming requests
app.use((req, res, next) => {
  console.log(`[${new Date().toUTCString()}] ${req.method} ${req.url}`);
  next();
});

// Serve static files from a "public" directory
app.use(express.static('public'));

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('API is up and running ');
});

// Define a JSON API endpoint
app.get('/api/data', (req, res) => {
  const jsonData = { message: 'This is a JSON response.' };
  res.json(jsonData);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});