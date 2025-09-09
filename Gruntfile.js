const fs = require('fs');

module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
      dist: {
        src: ['js/arquivo01.js', 'js/arquivo02.js', 'js/arquivo03.js'],
        dest: 'dist/todos.js',
      },
    },

  });
  grunt.loadNpmTasks('grunt-contrib-concat');

    // Tarefa personalizada para mostrar o conteúdo no console
  grunt.registerTask('mostrar', 'Mostra o conteúdo do arquivo final', function() {
    const conteudo = fs.readFileSync('dist/todos.js', 'utf8');
    console.log('\n📦 Arquivo final:\n');
    console.log(conteudo);
  });


  // Tarefa padrão: concat + mostrar
  grunt.registerTask('default', ['concat', 'mostrar']);
};
