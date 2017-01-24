/**
 * @author Bilal Cinarli
 */

var lint = function(gulp, options, plugins) {
    gulp.task('lint:scss', function() {
        return gulp.src(options.config.paths.scss + '**\/*.scss')
            .pipe(plugins.stylelint({
                reporters: [
                    {formatter: 'string', console: true}
                ]
            }))
            .pipe(plugins.notify({message: 'Style Linting completed', onLast: true}));
    });

    gulp.task('lint:js', function() {
        return gulp.src(options.config.paths.js + '**\/*.js')
            .pipe(plugins.eslint())
            .pipe(plugins.eslint.format())
            .pipe(plugins.notify({message: 'ESLint completed', onLast: true}));
    });
};

module.exports = lint;