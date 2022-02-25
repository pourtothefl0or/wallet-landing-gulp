import gulp from 'gulp';
import browserSync from 'browser-sync';
import { paths } from '../config/path.js';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import gulpPlumber from 'gulp-plumber';
import notify from 'gulp-notify';
import rename from 'gulp-rename';
import cleanCss from 'gulp-clean-css';
import autoPrefixer from 'gulp-autoprefixer';
import groupCssMediaQueries from 'gulp-group-css-media-queries';
import gulpMode from 'gulp-mode';
import gulpSourcemaps from 'gulp-sourcemaps';

const mode = gulpMode();
const { src, dest } = gulp;
const sass = gulpSass(dartSass);

export function styles() {
  return src(paths.src.styles)
    .pipe(mode.development(gulpSourcemaps.init()))
    .pipe(gulpPlumber(notify.onError({
      title: 'SCSS',
      message: 'Error: <%= error.message %>',
    })))
    .pipe(sass({
      outputStyle: 'expanded',
    }))
    .pipe(mode.production(groupCssMediaQueries()))
    .pipe(mode.production(autoPrefixer({
      grid: true,
      cascade: true,
    })))
    .pipe(dest(paths.dist.styles))
    .pipe(mode.production(cleanCss()))
    .pipe(rename({
      extname: '.min.css',
    }))
    .pipe(mode.development(gulpSourcemaps.write()))
    .pipe(dest(paths.dist.styles))
    .pipe(browserSync.stream());
}
