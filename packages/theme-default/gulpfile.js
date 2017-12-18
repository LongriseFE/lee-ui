'use strict'

var gulp = require('gulp')
var postcss = require('gulp-postcss')
var precss = require('precss')
var postcssimport = require('postcss-import')
var mixins = require('postcss-mixins')
var simplevars = require('postcss-simple-vars')
var nested = require('postcss-nested')
var cssnano = require('cssnano')
var autoprefixer = require('autoprefixer')
var each = require('postcss-each')

gulp.task('compile', function () {
  var processors = [
    precss,
    postcssimport,
    mixins,
    simplevars,
    nested,
    cssnano,
    autoprefixer,
    each
  ]
  return gulp.src('./src/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./lib'))
})

gulp.task('copyfont', function () {
  return gulp.src('./src/fonts/**')
    .pipe(gulp.dest('./lib/fonts'))
})

gulp.task('build', ['compile', 'copyfont'])
gulp.task('watch', function () {
  gulp.watch('./src/*.css', ['compile'])
})
