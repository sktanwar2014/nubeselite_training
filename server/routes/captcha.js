const express = require('express');
const Captcha = require('../controllers/captcha.js');
const captchaRouter = express.Router();


captchaRouter.route('/check').post(Captcha.captchaValidate);

module.exports = captchaRouter;