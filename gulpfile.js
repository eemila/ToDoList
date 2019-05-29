const gulp = require("gulp");
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const notifier = require('node-notifier');
const c = require('ansi-colors');
const csso = require('gulp-csso');

// gulp.task("jakas-nazwa", function(cb){
//     console.log("test");
//     cb();
// }) ---> stara wersja zapisu. Polecana jest ta poniżej: 

function ourError(err){
    console.log( c.red(err.messageFormatted) );

    notifier.notify({
        title: 'Sass error',
        message: err.messageFormatted
      });
}

const server = function(cb){
        browserSync.init({
        server: {
            baseDir: "./"
        }, 
        notify: false,
    });
    cb(); 
};
        

const css = function(cb) {
    return gulp.src('./scss/main.scss')
    .pipe(sourcemaps.init())
      .pipe(sass({
          outputStyle: "expanded" //nested(default), docelowy: compressed, compact, expanded

      }).on('error', ourError))
      .pipe(autoprefixer({
        browsers: ['last 2 versions']
    }))
      .pipe(csso())
      .pipe(sourcemaps.write(".")) //zapisuje komentarz w oddzielny pliku "." -- main.css.map
      .pipe(gulp.dest('./css'))
      .pipe(browserSync.stream());
}


const watchFiles = function(cb) {
    gulp.watch("./scss/**/*.scss", gulp.series(css));
    gulp.watch("./*.html").on('change', browserSync.reload);
    cb(); 
}


exports.css = css; 

exports.default = gulp.series(css, server, watchFiles);