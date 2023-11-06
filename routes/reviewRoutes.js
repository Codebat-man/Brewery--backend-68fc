const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

router.post('/save', reviewController.createReview);
router.get('/read', reviewController.getReviews);

module.exports = router;
