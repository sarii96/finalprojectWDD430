var express = require('express');
var router = express.Router();
var path = require('path');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, 'dist/final-project/index.html'));
});

module.exports = router;
