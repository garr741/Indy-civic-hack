var gulp = require('gulp');
var nodemon = require('gulp-nodemon');



gulp.task('start',function(){

});


gulp.task('default',['start'],function(){

});

nodemon({script: 'start.js', ext:'js'}).on('restart', function(){
  console.log("restarting");
});
