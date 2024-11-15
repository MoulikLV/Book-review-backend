const express = require("express");

const {getReviews,createReview,deleteReview} = require("../controllers/reviewController")

const authMiddleware = require("../middleware/authMiddleware")

const router = express.Router();

router.get('/getreviews', getReviews);
router.post('/createreview', authMiddleware, createReview);
router.delete("/deletereview/:id", authMiddleware, deleteReview);

module.exports = router