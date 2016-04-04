/**
 * @author Bilal Cinarli
 */

var lint = function(gulp, options, plugins) {
    gulp.task('lint:scss', function() {
        return gulp.src(options.config.paths.scss + '**\/*.scss')
            .pipe(plugins.sassLint())
            .pipe(plugins.sassLint.format())
            .pipe(plugins.sassLint.failOnError())
            .pipe(plugins.notify({message: 'Scss Lint completed', onLast: true}));
    });

    gulp.task('lint:js', function() {
        return gulp.src(options.config.paths.js + '**\/*.js')
            .pipe(plugins.jshint()).on('error', plugins.notify.onError('Error: <%= error.message %>'))
            .pipe(plugins.jshint.reporter('default', {
                fail: true
            }))
            .pipe(plugins.notify({message: 'JSHint completed', onLast: true}));
    });
};

module.exports = lint;