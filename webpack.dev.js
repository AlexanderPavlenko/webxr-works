const path = require('path');
const fs = require('fs');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'www'),
        watchContentBase: true,
        host: 'away.uwu',
        https: true,
        key: fs.readFileSync('ssl/cert-key.pem'),
        cert: fs.readFileSync('ssl/cert.pem'),
        ca: fs.readFileSync('ssl/ca.pem'),
    },
    experiments: {
        asyncWebAssembly: true
    },
    entry: {
        index: './src/index.js',
        life: './src/life.js',
        spline: './src/spline.js'
    },
    plugins: [
        new WasmPackPlugin({
            crateDirectory: path.resolve(__dirname, 'rust'),
            // meh: https://github.com/wasm-tool/wasm-pack-plugin/issues/87

            // Check https://rustwasm.github.io/wasm-pack/book/commands/build.html for
            // the available set of arguments.
            //
            // Optional space delimited arguments to appear before the wasm-pack
            // command. Default arguments are `--verbose`.
            args: '--log-level warn',
            // Default arguments are `--typescript --target browser --mode normal`.
            // extraArgs: '--no-typescript',

            // Optional array of absolute paths to directories, changes to which
            // will trigger the build.
            // watchDirectories: [
            //   path.resolve(__dirname, 'another-crate/src')
            // ],

            // The same as the `--out-dir` option for `wasm-pack`
            // outDir: 'pkg',

            // The same as the `--out-name` option for `wasm-pack`
            // outName: 'index',

            // If defined, `forceWatch` will force activate/deactivate watch mode for
            // `.rs` files.
            //
            // The default (not set) aligns watch mode for `.rs` files to Webpack's
            // watch mode.
            // forceWatch: true,

            // If defined, `forceMode` will force the compilation mode for `wasm-pack`
            //
            // Possible values are `development` and `production`.
            //
            // the mode `development` makes `wasm-pack` build in `debug` mode.
            // the mode `production` makes `wasm-pack` build in `release` mode.
            // forceMode: 'development',

            // Controls plugin output verbosity, either 'info' or 'error'.
            // Defaults to 'info'.
            // pluginLogLevel: 'info'
        }),
    ]
});