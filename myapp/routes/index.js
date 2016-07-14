var express = require('express');
var router = express.Router();
// var mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/helloworld');
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function(callback) {
//     console.log("connection success...");
//     // schema -->> model -->> document
//     /**
//      * schema
//      *
//      **/
//     var stuSchema = mongoose.Schema({
//         id: String,
//         name: String,
//         age: Number
//     });
//     // NOTE: methods must be added to the schema before compiling it with mongoose.model()
//     stuSchema.methods.print = function() {
//         console.log("id:" + this.id + "\t" + "name:" + this.name + "\t" + "age:" + this.age);
//     }

//     /**
//      * model
//      *
//      **/
//     var stuModel = mongoose.model('stuModel', stuSchema)


//     /**
//      * document
//      *
//      **/

//     var stuDocument = new stuModel({ id: "1002", name: 'nick', age: 33 })
//         //stuInstance.print();

//     stuDocument.save(function(err, stuDocument) {
//         if (err) return console.error(err);
//         stuDocument.print();
//     });
// });

var topicList = [
	{
		id: 1001,
		img: '/img/test.jpg',
		title: '中国最大的JavaScript开发者大会JSConf China 2016即宁JS 售票啦！',
		replyCount: 23,
		clickCount: 567
	},
	{
		id: 1002,
		img: '/img/test.jpg',
		title: '跟我一起部署和定制 CNPM——基础部署！',
		replyCount: 56,
		clickCount: 567
	},
	{
		id: 1003,
		img: '/img/test.jpg',
		title: '中国最大的JavaScript开发者大会JSConf China 2016即宁JS 售票啦.！',
		replyCount: 23,
		clickCount: 5677
	}
];
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { topicList: topicList });
});

module.exports = router;
