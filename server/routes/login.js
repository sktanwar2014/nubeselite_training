const express = require('express');
const Login = require('../controllers/login.js');
const loginRouter = express.Router();


loginRouter.route('/login').post(Login.login);

module.exports = loginRouter;