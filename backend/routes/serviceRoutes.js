const express = require('express');
const {
  getServices,
  getServiceById,
} = require('../controllers/serviceController');

const router = express.Router();

router.route('/').get(getServices);
router.route('/:id').get(getServiceById);

module.exports = router;
