'use strict';

const {src, dest, watch, series, parallel} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const minify = require("gulp-babel-minify");

const watchJSGraphicsFiles = ['./assets/js/graphics/*.js', '!./assets/js/graphics/*.min.js'];
const watchSassGraphicsFiles = ['./assets/scss/graphics/*.scss'];
const watchSassDashboardFiles = ['./assets/scss/dashboard/*.scss'];

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

exports.watch = function () {
	watch(watchSassGraphicsFiles, series(sassGraphics));
	watch(watchJSGraphicsFiles, series(jsGraphics));
	watch(watchSassDashboardFiles, series(sassDashboard));
}

exports.default = parallel(sassGraphics, sassDashboard, jsGraphics, copyGraphicsMinifiedJs);
