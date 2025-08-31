const { option } = require("grunt");

module.exports = function(grunt) { 
    grunt.initConfig({
         pkg: grunt.file.readJSON('package.json'),
         less: {  // COMANDO COMPILA OS ARQUIVOS EM LESS
            development: {
               files: {
                  'dev/styles/main.css' : 'src/styles/main.less'
               }
            },

            production: {
                  options: {
                     compress: true,
                  },
                  files: {  // DEFINE O ARQUIVO ORIGINAL E O FINAL DE UMA TAREFA
                     'dist/styles/main.min.css': 'src/styles/main.less'
                  }
               },
         },
         watch: {
               less: {
                  files: ['src/styles/**/*.less'], // Aqui os asteriscos indicam que ele ira executar 
                  tasks: ['less:development']
               }
         }
    })

      grunt.loadNpmTasks('grunt-contrib-less');
      grunt.loadNpmTasks('grunt-contrib-watch'); 


         grunt.registerTask('default', ['watch']); 
            grunt.registerTask('build', ['less:production']);
}