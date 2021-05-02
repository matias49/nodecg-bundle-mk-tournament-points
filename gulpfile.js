'use strict';

const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass');

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


exports.compileSass = parallel(sassGraphics, sassDashboard);

exports.default = function() {
	watch('./assets/scss/graphics/*.scss', series(sassGraphics));
	watch('./assets/scss/dashboard/*.scss', series(sassDashboard));
}
