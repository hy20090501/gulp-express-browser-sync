var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/helloworld');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(callback) {
    console.log("connection success...");
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express go' });
});

module.exports = router;
