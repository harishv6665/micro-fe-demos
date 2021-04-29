const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    entry: "./src/index",
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 3000,
        historyApiFallback: true,
        hot: false,
        hotOnly: false,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers":
                "X-Requested-With, content-type, Authorization",
        },
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                },
            },
        ],
    },
    resolve: {
        modules: [path.resolve('./src'), path.resolve('./node_modules')],
        extensions: ['*', '.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new ModuleFederationPlugin({
            name: 'shell',
            filename: 'remoteEntry.js',
            remotes: {
                home: 'home@http://localhost:3001/remoteEntry.js',
                contact: 'contact@http://localhost:3002/remoteEntry.js',
            },
            exposes: {
                "./Shell": "./src/Shell",
            },
            shared: ['react', 'react-dom'],
        }),
    ],
};
