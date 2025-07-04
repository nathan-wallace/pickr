const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {version} = require('./package.json');
const webpack = require('webpack');

module.exports = {
    entry: {
        'dist/pickr.es5.min': './src/js/pickr.js',
        'dist/themes/classic.min': './src/scss/themes/classic.scss',
        'dist/themes/nano.min': './src/scss/themes/nano.scss',
        'dist/themes/monolith.min': './src/scss/themes/monolith.scss',
        'dist/themes/wheel.min': './src/scss/themes/wheel.scss'
    },

    output: {
        filename: '[name].js',
        library: {
            type: 'umd',
            name: 'Pickr',
            export: 'default',
            umdNamedDefine: true
        }
    },

    devServer: {
        static: {directory: '.', watch: false},
        watchFiles: ['src/**/*', 'index.html'],
        devMiddleware: {
            watchOptions: {
                ignored: /node_modules/,
                poll: 1000
            }
        },
        host: '0.0.0.0',
        port: 3006,
        watchOptions: {
            ignored: /node_modules/,
            poll: 1000
        }
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },

    plugins: [
        new ESLintPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new webpack.DefinePlugin({
            VERSION: JSON.stringify(version)
        })
    ]
};
