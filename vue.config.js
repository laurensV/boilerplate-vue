const path = require('path');

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: '@import "imports.scss";',
        includePaths: [
          path.resolve(__dirname, 'src/scss')
        ]
      }
    }
  },
  lintOnSave: true,
  devServer: {
    https: false
  }
};
