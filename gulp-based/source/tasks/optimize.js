/**
 * @author Bilal Cinarli
 */

var optimize = function(gulp, options, plugins) {
    gulp.task('optimize', function() {
        return gulp.src(options.config.paths.app + '**/*.{gif,jpg,png,svg}')
            .pipe(plugins.imagemin({
                progressive:       true,
                svgoPlugins:       [{removeViewBox: false}],
                // png optimization
                optimizationLevel: 3
            })).on('error', plugins.notify.onError('Error: <%= error.message %>'))
            .pipe(plugins.notify({message: 'Images optimized', onLast: true}))
            .pipe(gulp.dest(options.config.paths.app));
    });
};

module.exports = optimize;