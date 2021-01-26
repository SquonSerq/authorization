var express = require('express');
var router = express.Router();
var db = require('../dao');
var dbCon = new db('./db/authorization.db');

const bcrypt = require('bcrypt');
const dao = require('../dao');
const saltRounds = 10;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', function(req, res, next){
  var hashPass = bcrypt.hashSync(req.body.password, saltRounds);

  var query = "INSERT INTO users (login, password) VALUES ('"+req.body.login+"', '"+hashPass+"' )";
  dbCon.runQuery(query);

  res.send("successful");
})

router.post('/login', function(req, res, next){
  
})

module.exports = router;
