/**
 * @author Bilal Cinarli
 */

module.exports = {
    dev: {
        options: {
            sourceMap: true,
            sourceMapName: "assets/scripts/global.min.js.map",
            banner: '/*! <%= package.name %> \n' +
                    ' *  <%= package.description %> \n' +
                    ' *  @author <%= package.author %> \n' +
                    '<% package.contributors.forEach(function(contributor) { %>' +
                    ' *          <%= contributor.name %> <<%=contributor.email %>> (<%=contributor.url %>)\n' +
                    '<% }) %>' +
                    ' *  @version <%= package.version %> \n' +
                    ' *  @build <%= grunt.template.today("dd-mm-yyyy") %> \n' +
                    ' */\n'
        },
        files: {
            "assets/scripts/main.min.js": ["assets/scripts/main.js"]
        }
    }
};