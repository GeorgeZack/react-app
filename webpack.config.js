const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const reactPlugin = new webpack.ProvidePlugin({
    "React": "react",
    "ReactDOM": "react-dom"
});

const jqueryPlugin = new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery"
});

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./public_html/index.html",
    filename: "./index.html"
});

module.exports = {
    mode: 'development',
    entry: './public_html/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: './public_html/Assets/[name].[ext]',
                        }
                    }
                ]
            },
            {
                test: /\.(mp4|mp3)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: './public_html/Media/[name].[ext]',
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        reactPlugin,
        jqueryPlugin,
        htmlPlugin
    ]
};
