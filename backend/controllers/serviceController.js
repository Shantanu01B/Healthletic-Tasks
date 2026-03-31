const Service = require('../models/Service');

// @desc    Fetch all services
// @route   GET /api/services
// @access  Public
const getServices = async (req, res, next) => {
  try {
    const services = await Service.find({});
    res.json(services);
  } catch (error) {
    next(error);
  }
};

// @desc    Fetch single service
// @route   GET /api/services/:id
// @access  Public
const getServiceById = async (req, res, next) => {
  try {
    const service = await Service.findById(req.params.id);
    if (service) {
      res.json(service);
    } else {
      res.status(404);
      throw new Error('Service not found');
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { getServices, getServiceById };
