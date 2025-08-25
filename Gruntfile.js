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
                                                   // todas as pastas tentro de styles, e tambem todo arquivo .less
                  tasks: ['less:development']
               }
         }
    })

         grunt.loadNpmTasks('grunt-contrib-less');
         // tarefa de conteudo construido
      grunt.loadNpmTasks('grunt-contrib-watch'); // AQUI FICA O GRUNT WATCH PARA MODIFICAR E CONTINUAR EXECUTANDO
         grunt.registerTask('default', ['watch']); // aqui foi modificado paea watch
      //tarefa de conteudo a ser publicado
            grunt.registerTask('build', ['less:production']);
}