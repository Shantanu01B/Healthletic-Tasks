const express = require('express');
const {
  getWorkouts,
  getWorkoutById,
} = require('../controllers/workoutController');

const router = express.Router();

router.route('/').get(getWorkouts);
router.route('/:id').get(getWorkoutById);

module.exports = router;
