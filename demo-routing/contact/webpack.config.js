const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    entry: "./src/index",
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 3002,
        historyApiFallback: true,
        hot: false,
        hotOnly: false,
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
            name: 'contact',
            filename: 'remoteEntry.js',
            remotes: {
                shell: "shell@http://localhost:3000/remoteEntry.js",
            },
            exposes: {
                './Contact': './src/Contact',
            },
            shared: ['react', 'react-dom'],
        }),
    ],
}