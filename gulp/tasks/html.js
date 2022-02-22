import gulp from 'gulp';
import browserSync from 'browser-sync';
import { paths } from '../config/path.js';
import fileinclude from 'gulp-file-include';

const { src, dest } = gulp;

export function html() {
  return src([paths.src.html, '!src/include/**/*.html'])
    .pipe(fileinclude({
      context: {
        arr: ['United Kingdom', 'United States', 'Russia', 'Ukraine']
      }
    }))
    .pipe(dest(paths.distFolder))
    .pipe(browserSync.stream());
}
