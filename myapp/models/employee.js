var mongodb = require('../config.js');
var Schema = mongodb.mongoose.Schema;

/**
 *  schema
 **/
var employeeSchema = new Schema({
    id: Number, //工号
    name: String, //姓名
    sex: Number, //性别
    age: Number, //年龄
    department: String //部门
});

// Instances of Models are documents. 
// Documents have many of their own built-in instance methods. 
// We may also define our own custom document instance methods too.
// NOTE: methods must be added to the schema before compiling it with mongoose.model()
employeeSchema.methods.printInfo = function() {
    var greeting = this.name;
    console.log("Testing methods defined in schema:" + greeting);
}

/**
 *  model
 **/
var employee = mongodb.mongoose.model("employee", employeeSchema);


var employeeDAO = function() {};


employeeDAO.prototype.save = function(obj, callback) {
    /**
     *  document
     **/
    var instance = new employee(obj);
    instance.printInfo();
    //Each document can be saved to the database by calling its save method. The first argument to the callback will be an error if any occured.
    instance.save(function(err) {
        callback(err);
    });
}

employeeDAO.prototype.findByIdAndUpdate = function(obj, callback) {
    var _id = obj._id;
    delete obj._id;
    employee.findOneAndUpdate(_id, obj, function(err, obj) {
        callback(err, obj);
    });
}


employeeDAO.prototype.findById = function(id, callback) {
    //console.log("查询参数：" + id);
    employee.findOne({ id: id }, function(err, obj) {
        // console.log("-----------------------" + obj);
        //if (err) return handleError(err);
        callback(err, obj);
    });
}

//We can access all of the employee documents through our employee model.
employeeDAO.prototype.findAll = function(callback) {
    /**
     *  query all documents in collection employees.
    **/
    // employee.find(function(err, obj) {
    //     //if (err) return console.error(err);
    //     callback(err, obj);
    // });

    /**
     *  filter
     *  If we want to filter our employee by name, Mongoose supports MongoDBs rich querying syntax.
     *   The following code performs a search for all documents with a name property that begins with "员工" and returns the results to the callback.
    **/
    employee.find({ name: /^员工/ }, function(err, obj) {
        //if (err) return console.error(err);
        callback(err, obj);
    });
}

module.exports = new employeeDAO();
