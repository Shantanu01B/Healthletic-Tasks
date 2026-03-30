const Contact = require('../models/Contact');

// @desc    Submit contact form
// @route   POST /api/contact
// @access  Public
const submitContactForm = async (req, res, next) => {
  const { name, email, subject, message } = req.body;

  try {
    if (!name || !email || !subject || !message) {
      res.status(400);
      throw new Error('Please provide all required fields');
    }

    const contact = await Contact.create({
      name,
      email,
      subject,
      message,
    });

    if (contact) {
      res.status(201).json({
        message: 'Message sent successfully. We will get back to you soon.',
      });
    } else {
      res.status(400);
      throw new Error('Invalid contact data');
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { submitContactForm };
