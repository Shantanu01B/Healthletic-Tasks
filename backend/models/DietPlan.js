const mongoose = require('mongoose');

const dietPlanSchema = mongoose.Schema(
  {
    name: {
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
    goal: {
      type: String,
      required: true,
      enum: ['Weight Loss', 'Muscle Gain', 'Endurance', 'Flexibility'],
    },
    calories: {
      type: Number,
      required: true,
    },
    meals: [
      {
        mealType: { type: String, required: true },
        description: { type: String, required: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const DietPlan = mongoose.model('DietPlan', dietPlanSchema);

module.exports = DietPlan;
