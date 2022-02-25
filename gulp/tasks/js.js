import gulp from 'gulp';
import { paths } from '../config/path.js';
import gulpPlumber from 'gulp-plumber';
import notify from 'gulp-notify';
import browserSync from 'browser-sync';
import webpackStream from 'webpack-stream';
import gulpMode from 'gulp-mode';

const { src, dest } = gulp;
const mode = gulpMode();
const isProduction = mode.production();

export function js() {
  return src(paths.src.js)
    .pipe(gulpPlumber(notify.onError({
      title: 'JS',
      message: 'Error: <%= error.message %>',
    })))
    .pipe(webpackStream({
      mode: isProduction ? 'production' : 'development',
      output: {
        filename: 'app.min.js',
      },
      module: {
        rules: [{
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        }],
      },
    }))
    .pipe(dest(paths.dist.js))
    .pipe(browserSync.stream());
}
