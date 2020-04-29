const Login = require('../models/login.js');


const login = async function (req, res, next) {
  const loginParam = {
    email: req.body.email,
    password: req.body.password
  };
  try {
    const newLogin = new Login(loginParam);
    const user= await newLogin.login();
    res.send({user});
  } catch (err) {
    next(err);
  }
};
module.exports = {login};