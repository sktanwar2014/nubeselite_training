const connection = require('../lib/connection.js');
const DbName = require('../lib/databaseMySQLNew.js');

const Testimonial = function (params) {
  this.id = params.id;
  this.name = params.name;
  this.testimonial = params.testimonial;
  this.status = params.status;
};



Testimonial.prototype.all = function () {
  const that = this;
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
      if (error) { throw error; }
      connection.changeUser({ database: DbName });
      connection.query('select id,name,content from testimonial where status="1"', function (error, rows, fields) {
        if (error) { console.log("Error...", error); reject(error); }
          resolve(rows);
      });
      connection.release();
      console.log('Process Complete %d', connection.threadId);
    });
  });

}




Testimonial.prototype.addTestimonial = function () {
  const that = this;
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
      if (error) { throw error; }
      connection.changeUser({ database: DbName });

      const values = [
        [that.name, that.testimonial, that.status]
      ];
      connection.query(`INSERT INTO testimonial(name,content,status) VALUES ?`, [values], (error, mrows, fields) => {
        if (error) { console.log("Error...", error); reject(error); }
          resolve(mrows);
      });
      connection.release();
      console.log('Process Complete %d', connection.threadId);
    });
  });
}


Testimonial.prototype.getTestimonial = function () {
  const that = this;
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
      if (error) { throw error; }
      connection.changeUser({ database: DbName });
      connection.query(`select id,name,content from testimonial where id='` + that.id + `' limit 1`, (error, mrows, fields) => {
        if (error) { console.log("Error...", error); reject(error); }
          resolve(mrows);
      });
      connection.release();
      console.log('Process Complete %d', connection.threadId);
    });
  });
}


Testimonial.prototype.editTestimonial = function () {
  const that = this;
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
      if (error) { throw error; }
      connection.changeUser({ database: DbName });
      connection.query(`UPDATE testimonial SET status='` + that.status + `',name='` + that.name + `',content='` + that.testimonial + `' where id='` + that.id + `'`, (error, mrows, fields) => {
        if (error) { console.log("Error...", error); reject(error); }
          resolve(mrows);
      });
      connection.release();
      console.log('Process Complete %d', connection.threadId);
    });
  });
}


Testimonial.prototype.deleteTestimonial = function () {
  const that = this;
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
      if (error) { throw error; }
      connection.changeUser({ database: DbName });
      connection.query(`UPDATE testimonial SET status='0' where id='` + that.id + `'`, (error, mrows, fields) => {
        if (error) { console.log("Error...", error); reject(error); }
          resolve(mrows);
      });
      connection.release();
      console.log('Process Complete %d', connection.threadId);
    });
  });
}


module.exports = Testimonial;
