module.exports = function(grunt) {

  var port = 1337;

  grunt.initConfig({
    connect: {
      server: {
        options: { port: port }
      },
      start: {
        options: {
          port: port,
          open: 'http://localhost:<%= connect.server.options.port %>/'
        },
        app: 'Google Chrome'
      }
    },
    sass: {
      dist: {
        files: { 'style.css': 'style.sass' }
      }
    },
    watch: {
      options: { livereload: true },
      css: {
        files: ['style.sass'],
        tasks: ['sass'],
        options: { spawn: false }
      },
      html: {
        files: ['index.html'],
        options: { spawn: false }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('start', ['connect:start', 'watch']);
  grunt.registerTask('default', ['connect:server','watch']);
  
};

