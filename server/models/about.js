const connection = require('../lib/connection.js');
const {DbName} = require('../lib/databaseMySQLNew.js');

const About = function (params) {
  this.id = params.id;
  this.about = params.about;
  this.phone_main = params.phone_main;
  this.phone_second = params.phone_second;
  this.email = params.email;
};



About.prototype.all = function () {
  const that = this;
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
      if (error) { throw error; }
      connection.changeUser({ database: DbName });
      connection.query('select * from about;', function (error, rows, fields) {
        if (error) { console.log("Error...", error); reject(error); }
          resolve(rows);
      });
      connection.release();
      console.log('Process Complete %d', connection.threadId);
    });
  });
}




About.prototype.addAbout = function () {
  const that = this;
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
      if (error) { throw error; }
      connection.changeUser({ database: DbName });

      const values = [
        [that.about]
      ];
      connection.query(`INSERT INTO about(about) VALUES ?`, [values], (error, mrows, fields) => {
        if (error) { console.log("Error...", error); reject(error); }
          resolve(mrows);        
      });
      connection.release();
      console.log('Process Complete %d', connection.threadId);
    });
  });
}

About.prototype.edit = function () {
  const that = this;
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
      if (error) { throw error; }
      connection.changeUser({ database: DbName });
      connection.query(`UPDATE about SET about='` + that.about + `',phone_main='` + that.phone_main + `',phone_second='` + that.phone_second + `',email='` + that.email + `' `, (error, mrows, fields) => {
        if (error) { console.log("Error...", error); reject(error); }
        resolve(mrows);
      });
      connection.release();
      console.log('Process Complete %d', connection.threadId);
    });
  });
}

About.prototype.deleteitem = function () {
  const that = this;
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
      if (error) { throw error; }
      connection.changeUser({ database: DbName });
      connection.query(`DELETE FROM about where id='` + that.id + `';`, (error, mrows, fields) => {
        if (error) { console.log("Error...", error); reject(error); }
          resolve(mrows);       
      });

      connection.release();
      console.log('Process Complete %d', connection.threadId);
    });
  });
}


module.exports = About;
