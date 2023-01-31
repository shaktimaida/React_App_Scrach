const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.tsx',
    mode: process.env.NODE_ENV === "production" ? "production" : "development",
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /(node_modules)/,
                loader: 'ts-loader'
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: { presets: ["@babel/env"] }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: { extensions: ['.js', '.jsx','.tsx','.ts'] },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};