const webpack = require("webpack");
const MinifyPlugin = require("babel-minify-webpack-plugin");

module.exports = {
    entry: {
        hok: __dirname + "/index.js"
    },
    output: {
        libraryTarget: "umd",
        library: ["hok"],
        path: __dirname + "/dist",
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader"
            },

            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        // new MinifyPlugin()
    ]
};
