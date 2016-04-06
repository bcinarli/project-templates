/**
 * @author Bilal Cinarli
 */

var sass = function(gulp, options, plugins) {
    gulp.task('styles', ['lint:scss'], function() {
        return gulp.src(options.config.paths.scss + '**/*.scss')
            .pipe(plugins.sass({
                outputStyle: 'expanded'
            }))
            .pipe(plugins.rename(options.pkg.name + '.css'))
            .pipe(gulp.dest(options.config.paths.styles))
            .pipe(plugins.sass({
                outputStyle: 'compressed'
            })).on('error', plugins.notify.onError('Error: <%= error.message %>'))
            .pipe(plugins.rename(options.pkg.name + '.min.css'))
            .pipe(plugins.header(options.config.banner, {pkg: options.pkg, date: new Date()}))
            .pipe(plugins.notify({message: 'Sass styles completed', onLast: true}))
            .pipe(gulp.dest(options.config.paths.styles));
    });
};

module.exports = sass;