/**
 *	数据库配置
**/
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/employeeDB');
exports.mongoose = mongoose;