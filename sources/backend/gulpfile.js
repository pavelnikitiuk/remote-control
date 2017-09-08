'use strict'

var gulp = require('gulp');
var scp = require('gulp-scp2');
var watch = require('gulp-watch');

const username = process.env.PI_USER_NAME || 'pi';
const password = process.env.PI_PASSWORD || 'raspberry';
const host = process.env.PI_HOST || 'raspberrypi.local';
const dest = process.env.PI_DEST_PATH || '/home/pi/remote-control/backend';

console.log(password);

var scpSettings = {
  host,
  username,
  password,
  dest,
  watch: (client) =>
    client.on('write', (o) =>
      console.log('write %s', o.destination)),
};

gulp.task('watch', () =>
  watch(['**/*.*', '**/**', '!node_modules/**', '!.git/**'])
    .pipe(scp(scpSettings))
    .on('error', (err) =>
      console.log(err)
    )
);

gulp.task('default', () =>
  gulp.src(['**/*.*', '**/**', '!node_modules/**'])
    .pipe(scp(scpSettings))
    .on('error', (err) =>
      console.log(err)
    )
);