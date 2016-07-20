var express = require('express');
var router = express.Router();
var operate = require('./routes/operate.js');

router.get('/', require('./routes/index.js'));
// router.get('/publish', require('./routes/publish.js'));
router.get('/publish/:id?', require('./routes/publish.js'));
// /* GET home page. */
// router.get('/', function(req, res, next) {
//     res.render('index', { topicList: topicList });
// });

router.get('/demo', require('./routes/demo.js'));
router.post('/operate/add', operate);
router.post('/operate/find', operate);
router.post('/operate/findAll', operate);
router.post('/operate/update', operate);

module.exports = router;
