'use strict';

var gulp = require('gulp');
var rsync = require('gulp-rsync');

const username = process.env.PI_USER_NAME || 'pi';
const hostname = process.env.PI_HOST || 'raspberrypi.local';
const destination = process.env.PI_DEST_PATH || '/home/pi/remote-control';

var settings = {
  hostname,
  username,
  destination,
  progress: true,
  exclude: '**/node_modules/**',
  clean: true,
  recursive: true,
};

const watchPattern = ['**/*', '!**/node_modules/**'];

gulp.task('default', () =>
  gulp.src(watchPattern)
    .pipe(rsync(settings))
);
