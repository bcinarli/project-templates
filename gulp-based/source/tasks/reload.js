/**
 * @author Bilal Cinarli
 */

var reload = function(gulp, options, plugins) {
    gulp.task('reload:html', function() {
        //return;
        return gulp.src(options.config.paths.app + '**/*.html')
            .pipe(plugins.connect.reload())
            .pipe(plugins.notify({message: 'HTML Reloaded', onLast: true}));
    });

    gulp.task('reload:styles', ['styles'], function() {
        //return;
        return gulp.src(options.config.paths.styles + '**/*.css')
            .pipe(plugins.connect.reload())
            .pipe(plugins.notify({message: 'Styles Reloaded', onLast: true}));
    });

    gulp.task('reload:scripts', ['uglify:app'], function() {
        //return;
        return gulp.src(options.config.paths.scripts + '**/*.js')
            .pipe(plugins.connect.reload())
            .pipe(plugins.notify({message: 'Scripts Reloaded', onLast: true}));
    });
};

module.exports = reload;