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
               },
               html: {
                  files: ['src/index.html'],
                   tasks: ['replace:dist']
               }
         },

         replace: {
               dev: {
                  options: {
                     patterns: [
                        {
                           match: 'Endereco_Do_CSS',
                           replacemment: './styles/main.min.css'
                        }
                     ]
                  },
                  files: [
                     {
                        expand: true,
                        flatten: true,
                        src: ['prebuild/index.html'],
                        dest: 'dist/'
                     }
                  ]
               }
         },
            htmlmin: {
               dist: {
                  options: {
                     removeComments:true,
                     collapseWhiteSpace: true,
                  },
                  //Aqui: pasta temporária ==> depois para ==> 'src/index.html'
                  files: {
                     'prebuild/index.html': 'src/index.html'
                  }
               }
            },
            clean: ['prebuild']
    })

   grunt.loadNpmTasks('grunt-contrib-less');
   grunt.loadNpmTasks('grunt-contrib-watch'); 
   grunt.loadNpmTasks('grunt-replace');
   grunt.loadNpmTasks('grunt-contrib-htmlmin');
   grunt.loadNpmTasks('grunt-contrib-clean');

   grunt.registerTask('default', ['watch']); 
   grunt.registerTask('clean','build', ['less:production', 'htmlmin:dist', 'replace:dist']);
}