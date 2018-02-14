var gulp = require('gulp');
var stylus = require('gulp-stylus');

gulp.task('styles', function() {
	gulp.src('style.styl')
		.pipe(stylus())
		.pipe(gulp.dest('./'));
});

//  Watches for any changes in a .styl file in this directory
//  If there is a change, run styles task above
gulp.task('watch:styles', function() {
	gulp.watch('**/*.styl', ['styles']);
});