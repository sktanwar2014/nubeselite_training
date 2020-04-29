const Testimonial = require('../models/testimonial.js');

const all = async function (req, res, next) {
  try {
    const testimonialList = await new Testimonial({}).all();
    res.send({ testimonialList });
  } catch (err) {
    next(err);
  }
};

const addTestimonial = async function (req, res, next) {
  const testimonialParam = {
    name: req.body.name,
    testimonial:req.body.testimonial,
    status: req.body.status,
  };
  try {
    const newTestimonial = new Testimonial(testimonialParam);
    await newTestimonial.addTestimonial();
    const testimonialList = await new Testimonial({}).all();
    res.send({testimonialList});
  } catch (err) {
    next(err);
  }
};



const getTestimonial = async function (req, res, next) {
  const courseParam = {
    id: req.body.id,
  };
  try {
    const newTestimonial = new Testimonial(courseParam);
    const testimonial= await newTestimonial.getTestimonial();
    res.send({testimonial});
  } catch (err) {
    next(err);
  }
};
const editTestimonial = async function (req, res, next) {
  const courseParam = {
    id: req.body.id,
    name: req.body.name,
    testimonial:req.body.content,
    status: req.body.status,
  };
  try {
    const newTestimonial = new Testimonial(courseParam);
    const testimonial= await newTestimonial.editTestimonial();
    res.send({testimonial});
  } catch (err) {
    next(err);
  }
};


const deleteTestimonial = async function (req, res, next) {
  const testimonialParam = {
    id: req.body.id,
  };
  try {
    const newTestimonial = new Testimonial(testimonialParam);
    await newTestimonial.deleteTestimonial();
    const testimonialList = await new Testimonial({}).all();
    
    res.send({testimonialList});
  } catch (err) {
    next(err);
  }
};
module.exports = { all,addTestimonial,editTestimonial,getTestimonial,deleteTestimonial};