"use strict"

const gulp              = require('gulp')
const sass              = require('gulp-sass')
const pug               = require('gulp-pug')
const babel             = require('gulp-babel')
const plumber           = require('gulp-plumber')
const imagemin          = require('gulp-imagemin')
const concat            = require('gulp-concat')
const autoprefixer      = require('gulp-autoprefixer')
const uglify            = require('gulp-uglify-es').default
const notify            = require('gulp-notify')
const browserSync       = require('browser-sync')
const newer             = require('gulp-newer')
const del               = require('del')
const removeCssComments = require('gulp-strip-css-comments')


const path = {
  dist: {
    index:   'dist/',
    style:   'dist/css/',
    scripts: 'dist/javascript/',
    medias:  'dist/images/',
    fonts:   'dist/fonts/'
  },
  src: {
    index:   'src/index/index.pug',
    style:   'src/style/style.{scss,css}',
    scripts: 'src/scripts/*.{ts,js}',
    medias:  'src/images/*',
    fonts:   'src/fonts/*.{woff,woff2}'
  },
  srcWatch: {
    index:   'src/index/*.pug',
    style:   'src/style/*.{scss,css}',
    scripts: 'src/scripts/*.{ts,js}',
    medias:  'src/images/*',
    fonts:   'src/fonts/*.{woff,woff2}'
  }
}


const buildFunctions = {
  index: done => {
    del(path.dist + '*.html')
    gulp.src(path.src.index)
      .pipe(plumber())
      .pipe(pug())
      .pipe(gulp.dest(path.dist.index))
  
    done()
  },
  style: done => {
    del(path.dist.style)
    gulp.src(path.src.style)
      .pipe(plumber({
        errorHandler: error => {
          notify.onError({
            title: 'SCSS error',
            message: 'error <%= error.message %>'
          })(error)
          this.emit('end')
        }
      }))
      .pipe(autoprefixer({ cascade: true }))
      .pipe(sass())
      .pipe(gulp.dest(path.dist.style))
  
    done()
  },
  scripts: done => {
    del(path.dist.scripts)
    gulp.src(path.src.scripts)
    .pipe(plumber({
      errorHandler: error => {
        notify.onError({
          title: 'JAVASCRIPT error',
          message: 'error <%= error.message %>'
        })(error)
        this.emit('end')
      }
    }))
    .pipe(concat('main.js'))
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest(path.dist.scripts))

    done()
  },
  images: done => {
    del(path.dist.medias)
    gulp.src(path.src.medias)
      .pipe(newer(path.dist.medias))
      .pipe(imagemin([
        imagemin.mozjpeg({
          quality: 93,
          progressive: true
        }),
        imagemin.optipng({
          optimizationLevel: 4
        }),
        imagemin.svgo({
          plugins: [
            { removeViewBox: true },
            { cleanupIDs: false }
          ]
        })
      ]))
      .pipe(gulp.dest(path.dist.medias))
      .pipe(browserSync.reload({ stream: true }))

    done()
  },
  build: done => {
    gulp.parallel(
      buildFunctions.index,
      buildFunctions.style,
      buildFunctions.scripts,
      buildFunctions.images
    )
    done()
  }
}

const devFunction = {
  index: done => {
    gulp.src(path.src.index)
      .pipe(plumber())
      .pipe(pug({ pretty: false }))
      .pipe(gulp.dest(path.dist.index))
      .pipe(browserSync.reload({ stream: true }))
  
    done()
  },
  style: done => {
    gulp.src(path.src.style)
      .pipe(plumber({
        errorHandler: error => {
          notify.onError({
            title: 'SCSS error',
            message: 'error <%= error.message %>'
          })(error)
        }
      }))
      .pipe(sass({ outputStyle: 'compressed' }))
      .pipe(removeCssComments())
      .pipe(autoprefixer({ cascade: true }))
      .pipe(gulp.dest(path.dist.style))
      .pipe(browserSync.reload({ stream: true }))
  
    done()
  },
  scripts: done => {
    gulp.src(['src/scripts/swiper-bundle.js', 'src/scripts/main.js'])
      .pipe(plumber({
        errorHandler: error => {
          notify.onError({
            title: 'JAVASCRIPT error',
            message: 'error <%= error.message %>'
          })(error)
        }
      }))
      .pipe(concat('main.js'))
      // .pipe(babel({
      //   presets: ['@babel/env']
      // }))
      .pipe(uglify())
      .pipe(gulp.dest(path.dist.scripts))
      .pipe(browserSync.reload({ stream: true }))

    done()
  },
  images: done => {
    gulp.src(path.src.medias)
      .pipe(newer(path.dist.medias))
      .pipe(imagemin([
        imagemin.mozjpeg({
          quality: 93,
          progressive: true
        }),
        imagemin.optipng({
          optimizationLevel: 4
        }),
        imagemin.svgo({
          plugins: [
            { removeViewBox: true },
            { cleanupIDs: false }
          ]
        })
      ]))
      .pipe(gulp.dest(path.dist.medias))
      .pipe(browserSync.reload({ stream: true }))

    done()
  },
  initialize: () => {
    browserSync.init({
      server: path.dist.index,
      notify: false,
      online: true,
      open: false
    })

    gulp.watch(path.srcWatch.index, devFunction.index)
    gulp.watch(path.srcWatch.style, devFunction.style)
    gulp.watch(path.srcWatch.scripts, devFunction.scripts)
    gulp.watch(path.srcWatch.medias, devFunction.images)
  }
}


exports.default = devFunction.initialize
exports.build   = buildFunctions.build // doesn't work
