/**
 * @author Bilal Cinarli
 */

var reload = function(gulp, options, plugins) {
    gulp.task('reload:html', function() {
        return gulp.src(options.config.paths.app + '**/*.html')
            .pipe(plugins.notify({message: 'HTML Reloaded', onLast: true}))
            .pipe(plugins.connect.reload());
    });

    gulp.task('reload:styles', function() {
        return gulp.src(options.config.paths.styles + '**/*.css')
            .pipe(plugins.notify({message: 'Styles Reloaded', onLast: true}))
            .pipe(plugins.connect.reload()).on('error', console.log('error occurred'));
    });

    gulp.task('reload:scripts', function() {
        return gulp.src(options.config.paths.scripts + '**/*.js')
            .pipe(plugins.notify({message: 'Scripts Reloaded', onLast: true}))
            .pipe(plugins.connect.reload()).on('error', console.log('error occurred'));
    });
};

module.exports = reload;