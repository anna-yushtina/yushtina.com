var gulp = require('gulp'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	cssvars = require('postcss-simple-vars'),
	nested = require('postcss-nested'),
	cssImport = require('postcss-import'),
	del = require ('del');



gulp.task('cleanFontAwesomeFiles', function(){
	return del('./app/temp/fonts');
});


gulp.task('copyFontAwesomeFiles', ['cleanFontAwesomeFiles'], function(){
	return gulp.src('./node_modules/font-awesome/fonts/*.*')
		.pipe(gulp.dest('./app/temp/fonts/'));
});


gulp.task('styles', ['copyFontAwesomeFiles'], function(){
	return gulp.src('./app/assets/styles/styles.css')
			.pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
			.pipe(gulp.dest('./app/temp/styles'));
});
