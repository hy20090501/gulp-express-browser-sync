// var ejs = require('gulp-ejs');
// var gutil = require('gulp-util');
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var nodemon = require('gulp-nodemon');

gulp.task('browser-sync', ['express-server'], function() {
    browserSync.init({
        proxy: "localhost:3000",
        open: false,
        port: 8090,
    });
    //监听模板变化
    gulp.watch([
        './views/*.ejs'
    ], function() { reload(); });

});


gulp.task('express-server', function() {
    nodemon({
        script: 'app.js',
        ext: './views/*.ejs html',
        env: { 'NODE_ENV': 'development' }
    })
});

gulp.task('default', ['browser-sync'], function() {

});
// gulp.task('ejs2html', function() {
//     gulp.src('./views/*.ejs')
//         .pipe(ejs({
//             msg: 'Hello Gulp!'
//         }).on('error', gutil.log))
//         .pipe(gulp.dest('./dist'));
// });
