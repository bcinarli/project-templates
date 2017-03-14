/**
 * @author Bilal Cinarli
 */

module.exports = {
    css: {
        files: "**/*.scss",
        tasks: ["sass"]
    },
    js: {
        files: ["source/scripts/**/*.js"],
        tasks: ["concat", "uglify"]
    }
};