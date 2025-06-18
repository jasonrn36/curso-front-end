const gulp = require('gulp');

function funcaoPadrao(callback) {
    console.log("\n\x1b[37mExecutando terefas em Paralelo no \x1b[1m \x1b[31mGULP \n\x1b[0m\x1b[33mEssa é a Primeira tarefa\x1b[37m");
    callback();
}

function digaOi(callback) {
    console.log("\n\x1b[0m\x1b[33m Essa é a segunda tarefa junto com a primeira\x1b[37m");
    digaTchau();
    callback();

}
function digaTchau(){
    console.log("\x1b[0m\x1b[33m Essa é a terceira tarefa junto com a segunda\x1b[37m \n");
}

exports.default = gulp.parallel (funcaoPadrao, digaOi);
exports.digaOi = digaOi;