var gulp = require('gulp');
var nodemon = require('gulp-nodemon');


gulp.task('start',function(){
  nodemon({
    script: 'start.js',
    ext: 'js',
    tasks:[]
  });

});


gulp.task('default',['start'],function(){

});
