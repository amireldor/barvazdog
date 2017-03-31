const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: ['./src/main.tsx'],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'script.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.js', '.tsx', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    }
}