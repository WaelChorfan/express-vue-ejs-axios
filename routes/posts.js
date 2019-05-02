var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('posts',{title:"posts from express server"});
});

module.exports = router;
