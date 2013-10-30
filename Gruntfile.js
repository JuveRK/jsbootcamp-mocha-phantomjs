module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      files: ["Gruntfile.js", "app.js", "public/**/*.js"]
    },
    copy: {
      main: {
        files: [
          {src: ["bower_components/**"], dest: "public/"}
        ]
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-bower-install-task");
  grunt.loadNpmTasks("grunt-contrib-copy");

  grunt.registerTask("default", ["jshint", "bower_install", "copy"]);
};
