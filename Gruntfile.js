module.exports = function(grunt) {
  grunt.initConfig({
    uglify: {
      meuScript: {
        files: {
          'dist/script.min.js': ['src/script.js']
        }
      }
    },

    less: {
      desenvolvimento: {
        files: {
          'dist/main.css': 'src/main.less'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');


  grunt.registerTask('default', ['less','uglify']);
};
