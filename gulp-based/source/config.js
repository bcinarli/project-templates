/**
 * @author Bilal Cinarli
 */

(function(){
    'use-strict';

    var config = {};

    config.paths = {
        app:     'app/',
        fonts:   'app/assets/fonts/',
        images:  'app/assets/images/',
        scripts: 'app/assets/scripts/',
        styles:  'app/assets/styles/',
        js:      'source/scripts/',
        scss:    'source/styles/',
        tpl:     'source/templates/',
        svg:     'source/svg/',
        data:    'source/data/'
    };

    config.banner = [
        '/*! <%= pkg.name %> \n' +
        ' *  <%= pkg.description %> \n' +
        ' *  @author <%= pkg.author %> \n' +
        '<% if (typeof pkg.contributors !== "undefined") { %>' +
        '<% pkg.contributors.forEach(function(contributor) { %>' +
        ' *          <%= contributor.name %> <<%=contributor.email %>> (<%=contributor.url %>)\n' +
        '<% }) %>' +
        '<% } %>' +
        ' *  @version <%= pkg.version %> \n' +
        ' *  @build <%= date %> \n' +
        ' */\n'
    ].join('');

    config.libscripts = [
        //'bower_components/dependency/js/unminified/file'
    ];
    
    config.scripts = [
        config.paths.js + '**/*.js'
    ];

    module.exports = config;
})();