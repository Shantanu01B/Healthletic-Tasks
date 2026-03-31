const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema(
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
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    duration: {
      type: String,
      required: true,
    },
    features: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
