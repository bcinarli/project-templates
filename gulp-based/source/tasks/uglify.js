/**
 * @author Bilal Cinarli
 */

var uglify = function(gulp, options, plugins) {
    gulp.task('uglify:lib', ['concat:lib'], function() {
        return gulp.src(options.config.paths.scripts + options.pkg.name + '.lib.js')
            .pipe(plugins.rename(options.pkg.name + '.lib.min.js'))
            .pipe(plugins.uglify()).on('error', plugins.notify.onError('Error: <%= error.message %>'))
            .pipe(plugins.header(options.config.banner, {pkg: options.pkg, date: new Date()}))
            .pipe(plugins.notify({message: 'Lib Script files uglified', onLast: true}))
            .pipe(gulp.dest(options.config.paths.scripts));
    });

    gulp.task('uglify:app', ['concat:app'], function() {
        return gulp.src(options.config.paths.scripts + options.pkg.name + '.js')
            .pipe(plugins.rename(options.pkg.name + '.min.js'))
            .pipe(plugins.uglify()).on('error', plugins.notify.onError('Error: <%= error.message %>'))
            .pipe(plugins.header(options.config.banner, {pkg: options.pkg, date: new Date()}))
            .pipe(plugins.notify({message: 'Lib Script files uglified', onLast: true}))
            .pipe(gulp.dest(options.config.paths.scripts));
    });

    gulp.task('uglify:all', ['uglify:lib', 'uglify:app']);
    gulp.task('scripts', ['uglify:all']);
};

module.exports = uglify;
