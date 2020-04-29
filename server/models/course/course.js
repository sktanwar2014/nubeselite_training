const connection = require('../../lib/connection.js');
const DbName = require('../../lib/databaseMySQLNew.js');

const Course = function (params) {

  this.id = params.id;
  this.mid = params.mid;
  this.name = params.name;
  this.about = params.about;
  this.advantages = params.advantages;
  this.status = params.status;
  this.title = params.title;
  this.batch_name = params.batch_name;
  this.cid = params.cid;
  this.start_date = params.start_date;
  this.days = params.days;
  this.duration = params.duration;
  this.fees = params.fees;
  this.time = params.time;
  this.status = params.status;
  this.question = params.question;
  this.answer = params.answer;
  this.certification = params.certification;
  this.image = params.image;
  this.course = params.course;
  this.cid = params.cid;
  this.description = params.description;
};

Course.prototype.all = function () {
  const that = this;
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
      if (error) { throw error; }
      connection.changeUser({ database: DbName });
      connection.query('select id,mid,name,about from courses where status="1"', function (error, rows, fields) {
        if (error) { console.log("Error...", error); reject(error); }
          resolve(rows);
      });
      connection.release();
      console.log('Process Complete %d', connection.threadId);
    });
  });
}



Course.prototype.sectionList = function () {
  const that = this;
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
      if (error) { throw error; }
      connection.changeUser({ database: DbName });
      connection.query('select id,course from maincourses where status="1"', function (error, rows, fields) {
        if (error) { console.log("Error...", error); reject(error); }
        resolve(rows);
      });
      connection.release();
      console.log('Process Complete %d', connection.threadId);
    });
  });
}

Course.prototype.addSection = function () {
  const that = this;
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
      if (error) {      throw error;      }
      connection.changeUser({ database: DbName });
      
      const values = [[that.course, that.status]];
      connection.query(`INSERT INTO maincourses(course,status) VALUES ?`, [values], (error, mrows, fields) => {
        if (error) { console.log("Error...", error); reject(error); }
        resolve(mrows);
      });
      connection.release();
      console.log('Process Complete %d', connection.threadId);
    });
  });
}


Course.prototype.deleteMainCourse = function () {
  const that = this;
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
      if (error) {     throw error;      }
      connection.changeUser({ database: DbName });
      connection.query(`UPDATE maincourses SET status='0' where id='` + that.id + `'`, (error, mrows, fields) => {
        if (error) { console.log("Error...", error); reject(error); }
         resolve(mrows);
      });
      connection.release();
      console.log('Process Complete %d', connection.threadId);
    });
  });
}


Course.prototype.getMainCourse = function () {
  const that = this;
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
       if (error) { throw error; }
      connection.changeUser({ database: DbName });
      connection.query(`select id,course from maincourses where id='` + that.id + `' limit 1`, (error, mrows, fields) => {
        if (error) { console.log("Error...", error); reject(error); }
        resolve(mrows);
      });
      connection.release();
      console.log('Process Complete %d', connection.threadId);
    });
  });
}


Course.prototype.editMainCourse = function () {
  const that = this;
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
       if (error) {       throw error;      }
      connection.changeUser({ database: DbName });
      connection.query(`UPDATE maincourses SET status='` + that.status + `',course='` + that.course + `' where id='` + that.id + `'`, (error, mrows, fields) => {
        if (error) { console.log("Error...", error); reject(error); }
          resolve(mrows);
      });
      connection.release();
      console.log('Process Complete %d', connection.threadId);
    });
  });
}


Course.prototype.addCourse = function () {
  const that = this;
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
      if (error) {        throw error;      }
      connection.changeUser({ database: DbName });

      const values = [[that.mid, that.name, that.about, that.advantages, that.status]];
      connection.query(`INSERT INTO courses(mid,name,about,advantages,status) VALUES ?`, [values], (error, mrows, fields) => {
        if (error) { console.log("Error...", error); reject(error); }
          const cid = mrows.insertId;
          connection.query('select id,mid,name,about,advantages from courses where status="1" && id="' + cid + '" limit 1', function (error, rows, fields) {
          if (error) { console.log("Error...", error); reject(error); }
             resolve(rows);
          });
      });
      connection.release();
      console.log('Process Complete %d', connection.threadId);
    });
  });
}

Course.prototype.course = function () {
  const that = this;
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
      if (error) {        throw error;      }
      connection.changeUser({ database: DbName });
      connection.query('select id,mid,name,about,advantages from courses where status="1"', function (error, rows, fields) {
        if (error) { console.log("Error...", error); reject(error); }
          resolve(rows);
      });
      connection.release();
      console.log('Process Complete %d', connection.threadId);
    });
  });

}



Course.prototype.getCourseBatches = function () {
  const that = this;
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
      if (error) {        throw error;      }
      connection.changeUser({ database: DbName });
      connection.query(`select id,cid,batch_name,title,start_date,time,days,duration,fees,status from batch where cid='` + that.cid + `' and status="1"`, (error, mrows, fields) => {
        if (error) { console.log("Error...", error); reject(error); }
          resolve(mrows);        
      });
      connection.release();
      console.log('Process Complete %d', connection.threadId);
    });
  });
}

Course.prototype.getCourse = function () {
  const that = this;
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
      if (error) {        throw error;      }
      connection.changeUser({ database: DbName });
      connection.query(`select id,mid,name,about,advantages from courses where id='` + that.id + `' limit 1`, (error, mrows, fields) => {
        if (error) { console.log("Error...", error); reject(error); }
          resolve(mrows);
      });
      connection.release();
      console.log('Process Complete %d', connection.threadId);
    });
  });
}


Course.prototype.getCourseFaq = function () {
  const that = this;
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
      if (error) {        throw error;      }
      connection.changeUser({ database: DbName });
      connection.query(`select id,cid,question,answer,status from faq where cid='` + that.cid + `' and status='1'`, (error, mrows, fields) => {
        if (error) { console.log("Error...", error); reject(error); }
          resolve(mrows);
      });
      connection.release();
      console.log('Process Complete %d', connection.threadId);
    });
  });
}

Course.prototype.deleteLecture = function () {
  const that = this;
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
      if (error) {        throw error;      }
      connection.changeUser({ database: DbName });
      connection.query(`UPDATE syllabus SET status='0' where id='` + that.id + `'`, (error, mrows, fields) => {
        if (error) { console.log("Error...", error); reject(error); }
          resolve(mrows);
      });
      connection.release();
      console.log('Process Complete %d', connection.threadId);
    });
  });
}

Course.prototype.getLectures = function () {
  const that = this;
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
      if (error) {        throw error;      }
      connection.changeUser({ database: DbName });
      connection.query(`select id,cid,title,description,status from syllabus where cid='` + that.id + `' and status='1'`, (error, mrows, fields) => {
        if (error) { console.log("Error...", error); reject(error); }
          resolve(mrows);
      });
      connection.release();
      console.log('Process Complete %d', connection.threadId);
    });
  });
}


Course.prototype.editSCourse = function () {
  const that = this;
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
      if (error) {        throw error;      }
      connection.changeUser({ database: DbName });
      connection.query(`UPDATE courses SET status='` + that.status + `',mid='` + that.mid + `',name='` + that.name + `',about='` + that.about + `',advantages='` + that.advantages + `' where id='` + that.id + `'`, (error, mrows, fields) => {
        if (error) { console.log("Error...", error); reject(error); }
          resolve(mrows);
      });
      connection.release();
      console.log('Process Complete %d', connection.threadId);
    });
  });
}


Course.prototype.lecture = function () {
  const that = this;
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
      if (error) {        throw error;      }
      connection.changeUser({ database: DbName });
      connection.query('select id,cid,title,description,status from syllabus where id="' + that.id + '"', function (error, rows, fields) {
        if (error) { console.log("Error...", error); reject(error); }
          resolve(rows);
      });
      connection.release();
      console.log('Process Complete %d', connection.threadId);
    });
  });

}


Course.prototype.addLecture = function () {
  const that = this;
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
      if (error) {        throw error;      }
      connection.changeUser({ database: DbName });

      const values = [[that.cid, that.title, that.description, that.status]];
      connection.query(`INSERT INTO syllabus(cid,title,description,status) VALUES ?`, [values], (error, mrows, fields) => {
        if (error) { console.log("Error...", error); reject(error); }
          resolve(mrows);
      });
      connection.release();
      console.log('Process Complete %d', connection.threadId);
    });
  });
}


Course.prototype.editLecture = function () {
  const that = this;
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
      if (error) {        throw error;      }
      connection.changeUser({ database: DbName });
      connection.query(`UPDATE syllabus SET status='` + that.status + `',title='` + that.title + `',description='` + that.description + `' where id='` + that.id + `'`, (error, mrows, fields) => {
        if (error) { console.log("Error...", error); reject(error); }
          resolve(mrows);
      });
      connection.release();
      console.log('Process Complete %d', connection.threadId);
    });
  });
}

Course.prototype.addBatch = function () {
  const that = this;
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
      if (error) {        throw error;      }
      connection.changeUser({ database: DbName });

      const values = [[that.cid, that.batch_name, that.title, that.start_date, that.time, that.days, that.duration, that.fees, that.status]];
      connection.query(`INSERT INTO batch(cid,batch_name,title,start_date,time,days,duration,fees,status) VALUES ?`, [values], (error, mrows, fields) => {
        if (error) { console.log("Error...", error); reject(error); }
          resolve(mrows);
      });
      connection.release();
      console.log('Process Complete %d', connection.threadId);
    });
  });
}


Course.prototype.batches = function () {
  const that = this;
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
      if (error) {        throw error;      }
      connection.changeUser({ database: DbName });
      connection.query('select id,cid,batch_name,title,start_date,time,days,duration,fees,status from batch where status="1"', function (error, rows, fields) {
        if (error) { console.log("Error...", error); reject(error); }
          resolve(rows);
      });
      connection.release();
      console.log('Process Complete %d', connection.threadId);
    });
  });
}


Course.prototype.getBatch = function () {
  const that = this;
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
      if (error) {        throw error;      }
      connection.changeUser({ database: DbName });

      connection.query(`select id,cid,batch_name,title,start_date,time,days,duration,fees,status from batch where id='` + that.id + `' limit 1`, (error, mrows, fields) => {
        if (error) { console.log("Error...", error); reject(error); }
          resolve(mrows);
      });
      connection.release();
      console.log('Process Complete %d', connection.threadId);
    });
  });
}

Course.prototype.editBatch = function () {
  const that = this;
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
      if (error) {        throw error;      }
      connection.changeUser({ database: DbName });
      connection.query(`UPDATE batch SET status='` + that.status + `',cid='` + that.cid + `',batch_name='` + that.batch_name + `',title='` + that.title + `',start_date='` + that.start_date + `',days='` + that.days + `',duration='` + that.duration + `',fees='` + that.fees + `' where id='` + that.id + `'`, (error, mrows, fields) => {
        if (error) { console.log("Error...", error); reject(error); }
          resolve(mrows);
      });
      connection.release();
      console.log('Process Complete %d', connection.threadId);
    });
  });
}

Course.prototype.deleteBatch = function () {
  const that = this;
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
      if (error) {        throw error;      }
      connection.changeUser({ database: DbName });
      connection.query(`UPDATE batch SET status='0' where id='` + that.id + `'`, (error, mrows, fields) => {
        if (error) { console.log("Error...", error); reject(error); }
          resolve(mrows);
      });
      connection.release();
      console.log('Process Complete %d', connection.threadId);
    });
  });
}

Course.prototype.addFaq = function () {
  const that = this;
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
      if (error) {        throw error;      }
      connection.changeUser({ database: DbName });

      const values = [
        [that.cid, that.question, that.answer, that.status]
      ];
      connection.query(`INSERT INTO faq(cid,question,answer,status) VALUES ?`, [values], (error, mrows, fields) => {
        if (error) { console.log("Error...", error); reject(error); }
          resolve(mrows);
      });
      connection.release();
      console.log('Process Complete %d', connection.threadId);
    });
  });
}



Course.prototype.getFaq = function () {
  const that = this;
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
      if (error) {        throw error;      }
      connection.changeUser({ database: DbName });

      connection.query(`select id,cid,question,answer,status from faq where id='` + that.id + `' limit 1`, (error, mrows, fields) => {
        if (error) { console.log("Error...", error); reject(error); }
          resolve(mrows);
      });
      connection.release();
      console.log('Process Complete %d', connection.threadId);
    });
  });
}

Course.prototype.editFaq = function () {
  const that = this;
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
      if (error) {        throw error;      }
      connection.changeUser({ database: DbName });
      connection.query(`UPDATE faq SET status='` + that.status + `',cid='` + that.cid + `',question='` + that.question + `',answer='` + that.answer + `' where id='` + that.id + `'`, (error, mrows, fields) => {
        if (error) { console.log("Error...", error); reject(error); }
          resolve(mrows);
      });
      connection.release();
      console.log('Process Complete %d', connection.threadId);
    });
  });
}

Course.prototype.faqs = function () {
  const that = this;
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
      if (error) {        throw error;      }
      connection.changeUser({ database: DbName });
      connection.query('select id,cid,question,answer,status from faq where status="1"', function (error, rows, fields) {
        if (error) { console.log("Error...", error); reject(error); }
          resolve(rows);
      });
      connection.release();
      console.log('Process Complete %d', connection.threadId);
    });
  });
}


Course.prototype.deleteFaq = function () {
  const that = this;
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
      if (error) {        throw error;      }
      connection.changeUser({ database: DbName });

      connection.query(`UPDATE faq SET status='0' where id='` + that.id + `'`, (error, mrows, fields) => {
        if (error) { console.log("Error...", error); reject(error); }
          resolve(mrows);
      });
      connection.release();
      console.log('Process Complete %d', connection.threadId);
    });
  });
}



Course.prototype.addCertification = function () {
  const that = this;
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
      if (error) {        throw error;      }
      connection.changeUser({ database: DbName });

      const values = [
        [that.cid, that.question, that.answer, that.status]
      ];
      connection.query(`INSERT INTO certification(cid,certification,image,status) VALUES ?`, [values], (error, mrows, fields) => {
        if (error) { console.log("Error...", error); reject(error); }
          resolve(mrows);
      });
      connection.release();
      console.log('Process Complete %d', connection.threadId);
    });
  });
}


Course.prototype.certifications = function () {
  const that = this;
  return new Promise(function (resolve, reject) {
    connection.getConnection(function (error, connection) {
      if (error) {        throw error;      }
      connection.changeUser({ database: DbName });
      connection.query('select id,cid,certification,image,status from certification where status="1"', function (error, rows, fields) {
        if (error) { console.log("Error...", error); reject(error); }
          resolve(rows);
      });
      connection.release();
      console.log('Process Complete %d', connection.threadId);
    });
  });

}

module.exports = Course;
