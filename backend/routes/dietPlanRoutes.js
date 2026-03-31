const express = require('express');
const {
  getDietPlans,
  getDietPlanById,
} = require('../controllers/dietPlanController');

const router = express.Router();

router.route('/').get(getDietPlans);
router.route('/:id').get(getDietPlanById);

module.exports = router;
