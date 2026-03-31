const Workout = require('../models/Workout');

const getWorkouts = async (req, res, next) => {
  try {
    const workouts = await Workout.find({});
    res.json(workouts);
  } catch (error) {
    next(error);
  }
};

const getWorkoutById = async (req, res, next) => {
  try {
    const workout = await Workout.findById(req.params.id);
    if (workout) {
      res.json(workout);
    } else {
      res.status(404);
      throw new Error('Workout not found');
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { getWorkouts, getWorkoutById };
