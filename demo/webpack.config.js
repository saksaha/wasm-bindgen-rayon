const path = require('path');

module.exports = {
  entry: {
    main: path.join(__dirname, 'index.js'),
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
  }
};
