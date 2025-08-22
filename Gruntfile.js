module.exports = function(grunt) { 
    grunt.initConfig({
         pkg: grunt.file.readJSON('package.json'),
         less: {
            development: {
               files: {
                  'main.css' : 'main.less'
               }
            }
         }

         })

         grunt.registerTask('OlaGrunt', function() {
            const done = this.async();
            setTimeout(function() {
            console.log('Olá Grunt');
            done();
            }, 3000);
         })

         grunt.loadNpmTasks('grunt-contrib-less');

        grunt.registerTask('default', ['less']);

}