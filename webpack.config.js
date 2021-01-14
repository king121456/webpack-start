const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    entry: {
        index: path.join(__dirname, '/src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    devtool:'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {test: /\.css$/i, use: ['style-loader', 'css-loader']},
            {test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource'}
        ]
    },
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/index.html'),
            title: "学习webpack"
        })
    ],
    mode: 'development'
}
