const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');
const withImages = require('next-images');
module.exports = withImages(
  withCss(
    withSass({
      cssModules: false
    })
  )
);
