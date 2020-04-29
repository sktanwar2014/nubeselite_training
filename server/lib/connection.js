const MySQL = require("mysql");
const {env} = require('./databaseMySQLNew.js');

let dbOptions = '';
const { DbName } = require("../lib/databaseMySQLNew");


if (env === 'prod') {
   dbOptions = {
      host: 'localhost',
      user: 'root',
      password:'6mNMX9Ln0oykXKic',
      port: 3306
   };
} else {
   dbOptions = {
      host: 'localhost',
      user: 'root',
      password: '',
      port: 3306
   };
}


let connectionPool = MySQL.createPool({
      host: dbOptions.host, 
      user: dbOptions.user, 
      password: dbOptions.password, 
      port: dbOptions.port, 
      database: DbName 
   });

const getConnection = async function (done) {
   try {
      connectionPool.getConnection(done);
   } catch (ex) {
      console.log("ex........", ex);
      throw ex;
   }
};

module.exports = { getConnection: getConnection, DbName: DbName };