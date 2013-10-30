module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      files: ["Gruntfile.js", "app.js", "public/**/*.js"]
    }
  });

  grunt.loadNpmTasks("grunt-contrib-jshint");

  grunt.registerTask("default", ["jshint"]);
};
