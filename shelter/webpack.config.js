const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV || "development";

module.exports = {
    mode: NODE_ENV,
    entry: {
        main: './src/scripts/main/index.js',
        about: './src/scripts/our-pets/index-our-pets.js',
    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.[contenthash].js",
        assetModuleFilename: path.join("images", "[name].[contenthash][ext]"),
        clean: true,
    },
    devtool: NODE_ENV === "development" ? "inline-source-map" : null,
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                // test: /\.css$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.html$/,
                use: "html-loader",
            },
            {
                test: /\.(jpg|png|jpeg|svg|gif)$/,
                type: "asset/resource",
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/pages/1_index.html',
            inject: true,
            chunks: ['main'],
            filename: '1_index.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/2_index.html',
            inject: true,
            chunks: ['about'],
            filename: '2_index.html'
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, "public"),
        },
        hot: true,
        compress: true,
        port: 9000,
        open: true,
    },
};