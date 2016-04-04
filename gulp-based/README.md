Simple HTML Build with Gulp Tasks
===============

This template contains sample routines to build a simple app. It uses [Nunjucks](https://mozilla.github.io/nunjucks/)
 templates from Mozilla and Sass.
  
## Included Packages & Related Tasks

### Connect
Connect server with livereload

### Concat
Two concat routines, one for your library files e.g. jQuery plugins, Modal, Animation libraries mostly the bower 
components, and one for your own Application javascripts in `source/scripts` folder.

### Uglify
Minifying your concatenated script files.

### Linting
To increase your code quality and having a standard coding styles across the projects, [JSHint](https://github.com/jshint/jshint) and [Sass Lint](https://github.com/sasstools/sass-lint)

### Sass
[Caffeine](https://github.com/bcinarli/caffeine) & [Melange](https://github.com/bcinarli/melange) Scss frameworks preinstalled as _bower components_ . However it is easy to change Sass framework dependencies. 

### Icon Font
Easily transform your SVG files to iconfont. Task routines, watches the `source/svg` folder's file changes and 
generate and `_icons.scss` file with style definitions. 

### Image optimization
Optimizes your image files for the production.

### Template Rendering
With the usega of `tpl` files, Nuncjucks renders HTML files.


## Configuration
You can configure your library files, output folders and signature/banner texts in minifed files with `config.js` in 
`source` folder.

Also all additional tasks routines that are placed in `source/tasks` folder will be available in `Gulp` tasks


```js
// source and output paths
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

// banner text for minified files
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

// library scripts 
config.libscripts = [
    //'bower_components/dependency/js/unminified/file'
];

// your application scripts
config.scripts = [
    config.paths.js + '**/*.js'
];
```