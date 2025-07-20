const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');

function comprimeJavaScript() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'))
}

function compilaSass() {
    return gulp.src('./source/styles/main.scss')
    .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}

function funcaoPadrao(callback) {
    setTimeout(function(){
        console.log("\n\x1b[33mEssa tarefa só inicia apos 4 segundos\x1b[37m \n");
        callback();

    }, 3992);
}

function digaOi(callback) {
        setTimeout(function(){
    console.log("\n\x1b[0m\x1b[33m Essa é a segunda tarefa junto com a primeira\x1b[37m");
    digaTchau();
    callback();
    }, 991);

}
function digaTchau(){
    console.log("\x1b[0m\x1b[33m Essa é a terceira tarefa junto com a segunda\x1b[37m \n");
}

exports.default = gulp.parallel (funcaoPadrao, digaOi);
exports.digaOi = digaOi;

exports.sass = compilaSass;

exports.watch = function() {
    gulp.watch('./source/styles/*.scss', { ignoreInitial: false }, gulp.series(compilaSass));
}

exports.javascript = comprimeJavaScript;