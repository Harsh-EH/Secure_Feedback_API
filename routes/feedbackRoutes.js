const express = require('express');
const {
  submitFeedback,
  getAllFeedback,
  deleteFeedback
} = require('../controllers/feedbackController');
const protect = require('../middleware/auth');

const router = express.Router();

router.post('/', submitFeedback);
router.get('/admin', protect, getAllFeedback);
router.delete('/:id', protect, deleteFeedback);

module.exports = router;
