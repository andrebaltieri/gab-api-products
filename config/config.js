var path = require('path');
var rootPath = path.normalize(__dirname + '/..');
var env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'gab-products-api-dev'
    },
    port: process.env.PORT || 3000
  },

  production: {
    root: rootPath,
    app: {
      name: 'gab-products-api-prd'
    },
    port: process.env.PORT || 3000
  }
};

module.exports = config[env];