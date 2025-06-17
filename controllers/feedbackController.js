// controllers/feedbackController.js

const Feedback = require('../models/Feedback');

// @desc    Submit feedback
// @route   POST /api/feedback
// @access  Public
const submitFeedback = async (req, res, next) => {
  try {
    const { name, email, message, rating } = req.body;

    // Basic validation
    if (!name || !email || !message || !rating) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    const feedback = await Feedback.create({ name, email, message, rating });

    res.status(201).json({
      success: true,
      data: feedback,
    });
  } catch (error) {
    next(error); // Pass to error handler
  }
};

module.exports = {
  submitFeedback,
};

// @desc    Get all feedbacks (admin only)
// @route   GET /api/feedback/admin
// @access  Private (JWT)
const getAllFeedback = async (req, res, next) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: feedbacks.length, data: feedbacks });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  submitFeedback,
  getAllFeedback
};


// @desc    Delete a feedback by ID
// @route   DELETE /api/feedback/:id
// @access  Private (admin)
const deleteFeedback = async (req, res, next) => {
  try {
    const feedback = await Feedback.findById(req.params.id);

    if (!feedback) {
      return res.status(404).json({ success: false, message: 'Feedback not found' });
    }

    await Feedback.findByIdAndDelete(req.params.id);

    res.status(200).json({ success: true, message: 'Feedback deleted' });
  } catch (error) {
    next(error);
  }
};


module.exports = {
  submitFeedback,
  getAllFeedback,
  deleteFeedback
};
