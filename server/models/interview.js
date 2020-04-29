const connection = require('../lib/connection.js');
const DbName = require('../lib/databaseMySQLNew.js');

const Interview = function (params) {

  this.id = params.id;
  this.sid = params.sid;
  this.question = params.question;
  this.answer = params.answer;
  this.status = params.status;
  this.title = params.title;
};

Interview.prototype.all = function () {
  const that = this;
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
      if (error) { throw error; }
      connection.changeUser({ database: DbName });
      connection.query('select id,sid,question,answer from interview where status="1"', function (error, rows, fields) {
        if (error) { console.log("Error...", error); reject(error); }
          resolve(rows);
      });
      connection.release();
      console.log('Process Complete %d', connection.threadId);
    });
  });
}

Interview.prototype.addInterview = function () {
  const that = this;
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
      if (error) { throw error; }
      connection.changeUser({ database: DbName });

      const values = [
        [that.sid, that.question, that.answer, that.status]
      ];
      connection.query(`INSERT INTO interview(sid,question,answer,status) VALUES ?`, [values], (error, mrows, fields) => {
        if (error) { console.log("Error...", error); reject(error); }
          resolve(mrows);
      });

      connection.release();
      console.log('Process Complete %d', connection.threadId);
    });
  });
}

Interview.prototype.sectionList = function () {
  const that = this;
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {

      if (error) { throw error; }
      connection.changeUser({ database: DbName });
      connection.query('select id,title from interview_section where status="1"', function (error, rows, fields) {
        if (error) { console.log("Error...", error); reject(error); }
          resolve(rows);
      });
      connection.release();
      console.log('Process Complete %d', connection.threadId);
    });
  });
}


Interview.prototype.addSection = function () {
  const that = this;
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
      if (error) { throw error; }
      connection.changeUser({ database: DbName });

      const values = [
        [that.title, that.status]
      ];
      connection.query(`INSERT INTO interview_section(title,status) VALUES ?`, [values], (error, mrows, fields) => {
        if (error) { console.log("Error...", error); reject(error); }
          resolve(mrows);
      });
      connection.release();
      console.log('Process Complete %d', connection.threadId);
    });
  });
}




Interview.prototype.getInterview = function () {
  const that = this;
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
      if (error) { throw error; }
      connection.changeUser({ database: DbName });
      connection.query(`select id,sid,question,answer from interview where id='` + that.id + `' limit 1`, (error, mrows, fields) => {
        if (error) { console.log("Error...", error); reject(error); }
          resolve(mrows);
      });
      connection.release();
      console.log('Process Complete %d', connection.threadId);
    });
  });
}


Interview.prototype.editInterview = function () {
  const that = this;
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
      if (error) { throw error; }
      connection.changeUser({ database: DbName });
      connection.query(`UPDATE interview SET status='` + that.status + `',sid='` + that.sid + `',question='` + that.question + `',answer='` + that.answer + `' where id='` + that.id + `'`, (error, mrows, fields) => {
        if (error) { console.log("Error...", error); reject(error); }
          resolve(mrows);
      });
      connection.release();
      console.log('Process Complete %d', connection.threadId);
    });
  });
}


Interview.prototype.deleteInterview = function () {
  const that = this;
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
      if (error) { throw error; }
      connection.changeUser({ database: DbName });
      connection.query(`UPDATE interview SET status='0' where id='` + that.id + `'`, (error, mrows, fields) => {
        if (error) { console.log("Error...", error); reject(error); }
        resolve(mrows);
      });
      connection.release();
      console.log('Process Complete %d', connection.threadId);
    });
  });
}


Interview.prototype.getSection = function () {
  const that = this;
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
      if (error) { throw error; }
      connection.changeUser({ database: DbName });
      connection.query(`select id,title from interview_section where id='` + that.id + `' limit 1`, (error, mrows, fields) => {
        if (error) { console.log("Error...", error); reject(error); }
          resolve(mrows);
      });
      connection.release();
      console.log('Process Complete %d', connection.threadId);
    });
  });
}


Interview.prototype.editSection = function () {
  const that = this;
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
      if (error) { throw error; }
      connection.changeUser({ database: DbName });
      connection.query(`UPDATE interview_section SET status='` + that.status + `',title='` + that.title + `' where id='` + that.id + `'`, (error, mrows, fields) => {
        if (error) { console.log("Error...", error); reject(error); }
         resolve(mrows);
      });
      connection.release();
      console.log('Process Complete %d', connection.threadId);
    });
  });
}


Interview.prototype.deleteSection = function () {
  const that = this;
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
      if (error) { throw error; }
      connection.changeUser({ database: DbName });
      connection.query(`UPDATE interview_section SET status='0' where id='` + that.id + `'`, (error, mrows, fields) => {
        if (error) { console.log("Error...", error); reject(error); }
         resolve(mrows);
      });
      connection.release();
      console.log('Process Complete %d', connection.threadId);
    });
  });
}


module.exports = Interview;
