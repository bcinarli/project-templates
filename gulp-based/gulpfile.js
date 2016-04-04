/**
 * @author Bilal Cinarli
 */

'use strict';

var gulp         = require('gulp'),
    extend       = require('util')._extend,
    pkg          = require('./package.json'),
    config       = require('./rocket-engine/config'),
    options      = {pattern: ['./rocket-engine/tasks/**/*.js']};

options = extend(options, {pkg: pkg, config: config});

require('load-gulp-tasks')(gulp, options);

gulp.task('default', ['connect', 'watch']);