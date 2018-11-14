const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const cssMqpacker = require('css-mqpacker');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

const src = [
	'./scss/marketing-camp.scss',
	'./scss/product-camp.scss',
];

// -------------------------------------
// Tasks
// -------------------------------------

gulp.task('scss', () => {
  return gulp
    .src(src)
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        includePaths: ['node_modules'],
      }).on('error', sass.logError)
    )
    .pipe(postcss([
    	autoprefixer(),
    	cssMqpacker()
    ]))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('minify-scss', () => {
  return gulp
    .src(src)
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        includePaths: ['node_modules'],
      }).on('error', sass.logError)
    )
    .pipe(postcss([
    	autoprefixer(),
    	cssMqpacker(),
    	cssnano()
    ]))
    .pipe(rename({
		suffix: ".min"
	}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist'));
});

// gulp.task('watch', ['scss'], () => {
//   gulp.watch(['./scss/**/*.scss'], ['scss']);
// });

gulp.task('default', ['scss', 'minify-scss']);
