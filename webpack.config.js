const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.join(__dirname, '/src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.bundle.js'
    },
    module: {
        rules: [
            {test: /\.css$/i, use: ['style-loader', 'css-loader']},
            {test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource'}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: path.join(__dirname, 'src/index.html')})
    ],
    mode: 'development'
}
