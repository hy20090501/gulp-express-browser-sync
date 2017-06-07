var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// var mongoose = require('mongoose');

// var routes = require('./routes/index');
// var users = require('./routes/users');
// var employee = require('./routes/employee');
// var publish_routes = require('./routes/publish');
var routes_config = require('./routes_config.js');

var app = express();
var gulp = require('gulp');
var browserSync = require('browser-sync');

/**
 *  关键数据签名加密
 *  cookie.sign(param1: param2);
 *  param1 : important data 需要加密的数据
 *  param2 : signature key 加密密钥，通常是自己定义的字符串
 *
 **/
var cookie = require('cookie-signature');
var val = cookie.sign('hello', 'tobiiscooldreeeee');
console.log(val);

var val = cookie.sign('hello', 'tobiiscool');
console.log(cookie.unsign(val, 'tobiiscool') === 'hello');



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/**
 *  app.all() fits all request before app.use(*)
 *
 **/
app.all('/:param1?/:param2?/:param3?', function(req, res, next) {
    console.log('*****************************');
    next();
});
app.use('/', routes_config);
// app.use('/', routes);
// app.use('/publish', publish_routes);
// app.use('/users', users);
// app.get('/employee/add', employee.employeeAddPage);
// app.post('/employee/add', employee.doEmployeeAdd);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

//module.exports = app;
app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
    //debug('Express server listening on port ' + server.address().port);
});