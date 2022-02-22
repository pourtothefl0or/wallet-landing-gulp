import del from 'del';
import { paths } from '../config/path.js';

export function clean() {
  return del(paths.clean);
}
