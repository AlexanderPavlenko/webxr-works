const path = require('path');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'www'),
    watchContentBase: true,
    host: '0.0.0.0',
    useLocalIp: true,
    https: true
  }
};