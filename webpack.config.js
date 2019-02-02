const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const sourcePath = "src/renderer"

const reactPlugin = new webpack.ProvidePlugin({
    React: "react",
    ReactDOM: "react-dom"
});

const jqueryPlugin = new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery"
});

const htmlPlugin = new HtmlWebPackPlugin({
    template: `./${sourcePath}/index.html`,
    filename: "./index.html"
});

const cssPlugin = new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      // filename: "[name].css",
      chunkFilename: "[id].css"
});

module.exports = {
    mode: 'development',
    entry: `./${sourcePath}/index.js`,
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
				use: [{
					loader: MiniCssExtractPlugin.loader,
					options: {
						// you can specify a publicPath here
						// by default it use publicPath in webpackOptions.output
						// publicPath: '../'
					}
				},
				'css-loader', 'less-loader'
				]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: `./${sourcePath}/Assets/[name].[ext]`,
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
                            name: `./${sourcePath}/Media/[name].[ext]`,
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        reactPlugin,
        jqueryPlugin,
		cssPlugin
    ]
};
