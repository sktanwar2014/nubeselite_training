// import request from 'web-request';
async function captchaValidate(req, res, next) {
  let recaptchaResponse, remoteAddress;
  if (req.body.recaptchaToken) recaptchaResponse = req.body.recaptchaToken;
  else return;
  if (req.body.remoteAddress) remoteAddress = req.body.remoteAddress;
  else return;
  console.log(recaptchaResponse, remoteAddress)
  const secretKey = "6LemfMMUAAAAADnechf4mbQP-_izvKzCQYLDBr6z";
  return new Promise((resolve, reject) => {
    const verificationUrl = 'https://www.google.com/recaptcha/api/siteverify?secret=' + secretKey + '&response=' + recaptchaResponse + '&remoteip=' + remoteAddress;
    // request(verificationUrl
    //   , function (error, response, body) {
    //     console.log(error, response, body);
    //     if (error) {
    //       return reject(false);
    //     }
    //     if (response.statusCode !== 200) {
    //       return reject(false);
    //     }

    //     body = JSON.parse(body);
    //     const passCaptcha = !(body.success !== undefined && !body.success);
    //     resolve(passCaptcha);
    //   });
  });
}

// const check = async function (req, res, next) {
//   const loginParam = {
//     email: req.body.email,
//     password: req.body.password
//   };
//   try {
//     const newLogin = new Login(loginParam);
//     const user= await newLogin.login();
//     res.send({user});
//   } catch (err) {
//     next(err);
//   }
// };
module.exports = { captchaValidate };