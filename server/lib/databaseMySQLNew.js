const env = 'local';

console.log('env db', env);


let DbName = 'sargatech_training';
let domainName;
let mailPass = '';
let mailService = '';

if(env==='prod'){
  DbName = 'sargatech_training';
  domainName = 'training.sargatechnology.com';
}else{
  DbName = 'sargatech_training'
  domainName = 'localhost:3000';
}


module.exports = { DbName: DbName, domainName: domainName, mailPass: mailPass, mailService: mailService, env: env };