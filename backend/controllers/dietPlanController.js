const DietPlan = require('../models/DietPlan');

const getDietPlans = async (req, res, next) => {
  try {
    const dietPlans = await DietPlan.find({});
    res.json(dietPlans);
  } catch (error) {
    next(error);
  }
};

const getDietPlanById = async (req, res, next) => {
  try {
    const dietPlan = await DietPlan.findById(req.params.id);
    if (dietPlan) {
      res.json(dietPlan);
    } else {
      res.status(404);
      throw new Error('Diet Plan not found');
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { getDietPlans, getDietPlanById };
