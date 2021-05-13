'use strict';

const {src, dest, watch, series, parallel} = require('gulp');
const sass = require('gulp-sass');
const minify = require("gulp-babel-minify");

const watchJSGraphicsFiles = ['./assets/js/graphics/*.js', '!./assets/js/graphics/*.min.js'];

sass.compiler = require('node-sass');


function sassGraphics() {
	return src('./assets/scss/graphics/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(dest('./graphics/css'));
}

function sassDashboard() {
	return src('./assets/scss/dashboard/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(dest('./dashboard/css'));
}

function jsGraphics() {
	return src(watchJSGraphicsFiles)
		.pipe(minify())
		.pipe(dest('./graphics/js'));
}

function copyGraphicsMinifiedJs() {
	return src('./assets/js/graphics/*.min.js').pipe(dest('./graphics/js'));
}


exports.compileSass = parallel(sassGraphics, sassDashboard);
exports.compileJs = parallel(jsGraphics);
exports.copyMinifiedJs = parallel(copyGraphicsMinifiedJs);

exports.default = function () {
	watch(['./assets/scss/graphics/*.scss'], series(sassGraphics));
	watch(watchJSGraphicsFiles, series(jsGraphics));
	watch(['./assets/scss/dashboard/*.scss'], series(sassDashboard));
}
