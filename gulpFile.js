var gulp = require('gulp')

var sass = require('gulp-sass')

var babel = require('gulp-babel')



//ADD A SASS COMPILER
function sassCompile(cb) {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'));
    cb();
}


//ADD A SASS WATCHER FOR THE WHOLE FOLDER
function watch() {
    gulp.watch('app/scss/**/*.scss', sassCompile);
}


//SET UP BABEL METHOD FOR COMPILING ES5 TO ES6
gulp.task('babel', ()=>
    gulp.src('app/js/ES6/index.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('app/js/ES5'))
)



exports.sass = sassCompile;

exports.watch = watch;