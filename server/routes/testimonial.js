const express = require('express');
const Testimonial = require('../controllers/testimonial.js');
const testimonialRouter = express.Router();


testimonialRouter.route('/list').get(Testimonial.all);
testimonialRouter.route('/addTestimonial').post(Testimonial.addTestimonial);
testimonialRouter.route('/deleteTestimonial').post(Testimonial.deleteTestimonial);

testimonialRouter.route('/getTestimonial').post(Testimonial.getTestimonial);
testimonialRouter.route('/editTestimonial').post(Testimonial.editTestimonial);

module.exports = testimonialRouter;