var express = require('express');
var router = express.Router();

router.get('/', require('./routes/index.js'));
router.get('/publish', require('./routes/publish.js'));
// /* GET home page. */
// router.get('/', function(req, res, next) {
//     res.render('index', { topicList: topicList });
// });

module.exports = router;
