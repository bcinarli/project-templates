/**
 * @author Bilal Cinarli
 */

var concat = function(gulp, options, plugins) {
    gulp.task('concat:lib', function() {
        return gulp.src(options.config.libscripts)
            .pipe(plugins.sourcemaps.init())
            .pipe(plugins.concat(options.pkg.name + '.lib.js')).on('error', plugins.notify.onError('Error: <%= error.message %>'))
            .pipe(plugins.sourcemaps.write('./'))
            .pipe(plugins.notify({message: 'Lib Script files merged', onLast: true}))
            .pipe(gulp.dest(options.config.paths.scripts));
    });

    gulp.task('concat:app', ['lint:js'], function() {
        return gulp.src(options.config.scripts)
            .pipe(plugins.sourcemaps.init())
            .pipe(plugins.concat(options.pkg.name + '.js')).on('error', plugins.notify.onError('Error: <%= error.message %>'))
            .pipe(plugins.sourcemaps.write('./'))
            .pipe(plugins.notify({message: 'App Script files merged', onLast: true}))
            .pipe(gulp.dest(options.config.paths.scripts));
    });

    gulp.task('concat:all', ['concat:lib', 'concat:app']);
};

module.exports = concat;