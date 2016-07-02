var mongodb = require('./mongodb');
var Schema = mongodb.mongoose.Schema;

var employeeSchema = new Schema({
  id: Number,    //工号
  name: String,　//姓名
  sex: Number,   //性别
  age: Number,    //年龄
  department: String //部门
});

var employee = mongodb.mongoose.model("employee", employeeSchema);

var employeeDAO = function() {};

employeeDAO.prototype.save = function(obj, callback) {
    var instance = new employee(obj);
    instance.save(function(err) {
        callback(err);
    });
};

employeeDAO.prototype.findByIdAndUpdate = function(obj, callback) {
    var _id = obj._id;
    delete obj._id;
    employee.findOneAndUpdate(_id, obj, function(err, obj) {
        callback(err, obj);
    });
}


employeeDAO.prototype.findByName = function(name, callback) {
    employee.findOne({ name: name }, function(err, obj) {
        callback(err, obj);
    });
};

module.exports = new employeeDAO();
