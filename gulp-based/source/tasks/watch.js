/**
 * @author Bilal Cinarli
 */

var watch = function(gulp, options, plugins) {
    gulp.task('watch', function() {
        // --------------------------
        // watch:html
        // --------------------------
        gulp.watch(options.config.paths.tpl + '**/*.tpl', ['render']);
        gulp.watch(options.config.paths.data + '**/*.json', ['render']);
        gulp.watch(options.config.paths.app + '**/*.html', ['reload:html']);

        // --------------------------
        // watch:sass
        // --------------------------
        gulp.watch(options.config.paths.scss + '**/*.scss', ['styles', 'reload:styles']);

        // --------------------------
        // watch:scripts
        // --------------------------
        gulp.watch([options.config.paths.js + '**/*.js'], ['scripts', 'reload:scripts']);

        // --------------------------
        // watch:icons
        // --------------------------
        gulp.watch([options.config.paths.svg + '**/*.svg'], ['icons', 'reload:styles']);
    });
};

module.exports = watch;