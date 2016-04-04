/**
 * @author Bilal Cinarli
 */

var icons = function(gulp, options, plugins) {
    gulp.task('icons', function() {
        var runTimestamp = Math.round(Date.now() / 1000);

        return gulp.src(options.config.paths.svg + '**/*.svg')
            .pipe(plugins.iconfont({
                fontName:      options.pkg.name,
                appendUnicode: true,
                formats:       ['ttf', 'eot', 'woff'],
                timestamp:     runTimestamp
            })).on('glyphs', function(glyphs) {
                gulp.src(options.config.paths.tpl + 'tools/icons.tpl')
                    .pipe(plugins.consolidate('lodash', {
                        glyphs: glyphs,
                        prefix: 'icon-'
                    }))
                    .pipe(plugins.rename('_icons.scss'))
                    .pipe(plugins.notify('Icon styles created'))
                    .pipe(gulp.dest(options.config.paths.scss + 'gui/elements/'));
            })
            .pipe(gulp.dest(options.config.paths.fonts));
    });
};

module.exports = icons;