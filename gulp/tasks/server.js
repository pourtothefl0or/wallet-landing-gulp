import browserSync from 'browser-sync';
import { paths } from '../config/path.js';

export function server(done) {
  browserSync.init({
    server: {
      baseDir: paths.dist.html,
    },
    notify: false,
  });

  done();
}
