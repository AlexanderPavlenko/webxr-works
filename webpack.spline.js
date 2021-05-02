const path = require('path');
const fs = require('fs');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    entry: {
        spline: './src/spline.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist/spline'),
        clean: true,
    },
});
