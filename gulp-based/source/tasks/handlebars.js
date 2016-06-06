/**
 * @author Mesut GOK
 */

var handlebars = function(gulp, options, plugins) {
    gulp.task('handlebars', function() {
        return gulp.src(options.config.paths.tpl + '**/*.hbs')
            .pipe(plugins.handlebars())
            .pipe(plugins.wrap('Handlebars.template(<%= contents %>)'))
            .pipe(plugins.declare({
                namespace  : options.config.namespace.templates,
                noRedeclare: true
            }))
            .pipe(plugins.concat('_templates.js'))
            .pipe(gulp.dest(options.config.paths.js + 'templates/'));
    });
};

module.exports = handlebars;