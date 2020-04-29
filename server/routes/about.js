const express = require('express');
const About = require('../controllers/about.js');
const aboutRouter = express.Router();

aboutRouter.route('/about').get(About.all);
aboutRouter.route('/addAbout').post(About.addAbout);
aboutRouter.route('/edit').post(About.edit);
aboutRouter.route('/delete').post(About.deleteitem);

module.exports = aboutRouter;