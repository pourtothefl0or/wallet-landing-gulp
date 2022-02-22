import gulp from 'gulp';
import { paths } from '../config/path.js';
const { src, dest } = gulp;

export function fonts() {
  return src(paths.src.fonts).pipe(dest(paths.dist.fonts));
}
