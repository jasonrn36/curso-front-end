module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      desenvolvimento: {
        files: {
          'dist/estilo.css': 'src/estilo.less'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.registerTask('default', ['less']);
};
