const connection = require('../lib/connection.js');
const {DbName} = require('../lib/databaseMySQLNew.js');

const Login = function (params) {

  this.email = params.email;
  this.password = params.password;
};

Login.prototype.login = function () {
  const that = this;
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
      console.log('Process Started %d All', connection.threadId);
      if (error) { throw error;  }
      connection.changeUser({ database: DbName });
      connection.query('select id,email,password,role,status from user where status="1" and email="' + that.email + '" and password="' + that.password + '" limit 1', (error, mrows, fields) => {
        if (error) { console.log("Error...", error); reject(error); }
          resolve(mrows);
      });
      connection.release();
      console.log('Process Complete %d', connection.threadId);
    });
  });
}


module.exports = Login;
