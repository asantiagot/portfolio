const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require("path");
const webpack = require("webpack");

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, "public/"),
        port: 3001,
        publicPath: "http://localhost:3001/dist/",
        hotOnly: true
    },

    plugins: [new webpack.HotModuleReplacementPlugin()]

});