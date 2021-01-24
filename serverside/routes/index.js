var express = require('express');
var router = express.Router();

var infoJson = {
  name: "Jake",
  age: 13,
}

/* GET home page. */
router.get('/', function(req, res) {
  res.json(infoJson);
});

router.get('/test', function(req, res){
  console.log(req.body);
})

module.exports = router;
