var express = require('express');
var router = express.Router();
var db = require('../dao');
var dbCon = new db('./db/authorization.db');

const crypto = require('crypto');
const bcrypt = require('bcrypt');
const dao = require('../dao');
const saltRounds = 10;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', function(req, res, next){

  var sessionId = crypto.createHash('md5').update((new Date()).valueOf().toString() + Math.random().toString()).digest('hex');

  var hashPass = bcrypt.hashSync(req.body.password, saltRounds);

  var createUserDB = "INSERT INTO users (login, password, sessId) VALUES ('"+req.body.login+"', '"+hashPass+"', '"+sessionId+"' )";
  dbCon.runQuery(createUserDB);

  res.send("successful");
})

router.get('/login', function(req, res, next){
  
})

module.exports = router;
