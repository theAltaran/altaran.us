// config-overrides.js
const path = require('path');

module.exports = function override(config) {
  // Provide fallbacks for fs, path, and os modules
  config.resolve.fallback = {
    fs: false,
    path: require.resolve('path-browserify'),
    os: require.resolve('os-browserify/browser'),
  };

  return config;
};
