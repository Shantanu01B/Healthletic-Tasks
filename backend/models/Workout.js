const mongoose = require('mongoose');

const workoutSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    difficulty: {
      type: String,
      required: true,
      enum: ['Beginner', 'Intermediate', 'Advanced'],
    },
    duration: {
      type: String,
      required: true,
    },
    exercises: [
      {
        name: { type: String, required: true },
        reps: { type: String, required: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
