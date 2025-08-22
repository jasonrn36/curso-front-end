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
         }
    })

         grunt.loadNpmTasks('grunt-contrib-less');
         // tarefa de conteudo construido
        grunt.registerTask('default', ['less:development']);
      //tarefa de conteudo a ser publicado
        grunt.registerTask('build', ['less:production']);
}