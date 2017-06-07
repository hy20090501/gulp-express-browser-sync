var express = require('express');
var router = express.Router();
var employee = require('./../models/employee.js');


router.get('/employee/list', function(req, res, next) {
    employee.findAll(function(err, obj) {
        if (err) {
            // res.send({ 'success': false, msg: "" });
        } else {
            res.render('list', { employeeList: obj });
        }
    });
});

module.exports = router;