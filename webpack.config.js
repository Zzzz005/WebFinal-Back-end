// webpack.config.js

const path = require('path');

module.exports = {
  // Другие настройки конфигурации webpack...
  resolve: {
    fallback: {
      "crypto": require.resolve("crypto-browserify"),
      "stream": require.resolve("stream-browserify")
    }
  },
};
