import gulp from 'gulp';
import { clean } from './gulp/tasks/clean.js';
import { fonts } from './gulp/tasks/fonts.js';
import { html } from './gulp/tasks/html.js';
import { images } from './gulp/tasks/images.js';
import { js } from './gulp/tasks/js.js';
import { server } from './gulp/tasks/server.js';
import { styles } from './gulp/tasks/styles.js';
import { favicon } from './gulp/tasks/favicon.js';
import { watcher } from './gulp/tasks/watcher.js';

const { series, task, parallel } = gulp;

const mainTask = parallel(html, fonts, styles, js, images, favicon);

const dev = series(clean, mainTask, parallel(watcher, server));
const build = series(clean, mainTask);

task('build', build);
task('default', dev);
