const path = require('path');
const router = require('express').Router();
const { env } = require("../lib/databaseMySQLNew");


router.get('*', (req, res) => {
    if (env === 'prod') {
        const route = path.join(__dirname, '..', 'dist', 'index.html');
        res.sendFile(route);
      } else {
        const route = path.join(__dirname, '..', '..', 'public', 'index.html');
        res.sendFile(route);
      }
});

module.exports = router;
