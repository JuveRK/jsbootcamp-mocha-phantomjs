module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      files: ["Gruntfile.js", "app.js", "public/*.js"]
    },
    copy: {
      main: {
        files: [
          {src: ["bower_components/**"], dest: "public/"}
        ]
      }
    },
    clean: ["bower_components", "public/bower_components", "node_modules"],
    mocha_phantomjs: {
      all: ["tests/**/*.html"],
      options: {
        reporter: "xunit",
        output: "./mocha_result.xml"
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-bower-install-task");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-mocha-phantomjs");


  grunt.registerTask("default", ["jshint", "bower_install", "copy"]);
  grunt.registerTask("test", ["mocha_phantomjs"]);
};
