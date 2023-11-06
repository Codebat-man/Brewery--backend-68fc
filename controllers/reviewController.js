const Review = require('../models/review');

const createReview = async (req, res) => {
  try {
    const { name, email, message, rating } = req.body;
    const review = new Review({ name, email, message, rating});
    await review.save();
    res.status(201).json({status:"ok"});
  } catch (error) {
    console.error('Error creating review:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

const getReviews = async (req, res) => {
try {
      // Assuming you have a Review model, you can use Mongoose to find all reviews
      const reviews = await Review.find();
      res.status(200).json(reviews);
    } catch (error) {
      console.error('Error fetching reviews:', error);
      res.status(500).json({ error: 'Server error' });
    }
  };

module.exports = { createReview, getReviews };
