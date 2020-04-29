const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require("morgan");
const request = require('request');

const {env} = require('./lib/databaseMySQLNew.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));

app.use(logger('dev'));
app.use(helmet());

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: false }));


if (env === 'prod') {
  app.use('/', express.static(path.join(__dirname, 'dist')));
  app.use('/dist', express.static(path.join(__dirname, 'dist')));
} else {
  app.use('/', express.static(path.join(__dirname, '..', 'public')));
  app.use('/public', express.static(path.join(__dirname, '..', 'public')));
}

const routes = require('./routes');
const loginRouter = require('./routes/login');
const courseRouter = require('./routes/course');
const testimonialRouter = require('./routes/testimonial');
const aboutRouter = require('./routes/about');
const interviewRouter = require('./routes/interview');
const captchaRouter = require('./routes/captcha');

app.use('/api/auth', loginRouter);
app.use('/api/course', courseRouter);
app.use('/api/about', aboutRouter);
app.use('/api/testimonial', testimonialRouter);
app.use('/api/interview', interviewRouter);
app.use('/api/capt', captchaRouter);
app.use('/', routes);

app.use(function (error, req, res, next) {
  // Any request to this server will get here, and will send an HTTP
  // response with the error message 'woops'
  console.log("Server Error....", error);
  const result = {
    error: `Server Error, Please contact administrator`
  };
  // if(error){res.status(error.statusCode).send(result.message);}else
  if (!error.statusCode) error.statusCode = 500;
  res.status(error.statusCode).send(result.message);
});


let port  = '';

if(env === 'prod'){
  port  = 3010;
}else{
  port  = 5000;
}

app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`Server Running on port ${port}`));


module.exports = app;