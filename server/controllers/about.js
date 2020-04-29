const About = require('../models/about.js');

const all = async function (req, res, next) {
  try {
    const aboutList = await new About({}).all();
    res.send({ aboutList });
  } catch (err) {
    next(err);
  }
};

const addAbout = async function (req, res, next) {
  const aboutParam = {
    about: req.body.about,
  };
  try {
    const newAbout = new About(aboutParam);
    await newAbout.addAbout();
    const aboutList = await new About({}).all();
    res.send({ aboutList });
  } catch (err) {
    next(err);
  }
};

const edit = async function (req, res, next) {
  const aboutParam = { ...req.body };
  try {
    const newAbout = new About(aboutParam);
    await newAbout.edit();
    const aboutList = await new About({}).all();
    res.send({ aboutList });
  } catch (err) {
    next(err);
  }
};

const deleteitem = async function (req, res, next) {
  const aboutParam = { ...req.body };
  try {
    const newAbout = new About(aboutParam);
    await newAbout.deleteitem();
    const aboutList = await new About({}).all();
    res.send({ aboutList });
  } catch (err) {
    next(err);
  }
};

module.exports = { all, addAbout, edit, deleteitem };