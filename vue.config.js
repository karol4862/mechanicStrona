const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    configureWebpack: {
        entry: './src/main.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'main_bundle.js'
        },
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                'vue-style-loader',
                'css-loader'
                ]
            }
        ],
        plugins: [
            new HtmlWebpackPlugin(),
            new VueLoaderPlugin()
            ]
      }
};